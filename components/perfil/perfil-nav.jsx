import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import CardPost from '../card-post/card-post';
import { connect } from 'react-redux';
import Store from '../store/store';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import AddPost from './add-post';
import './perfil-nav.scss';
import Friends from './friends';

/*const users = [
  {
    name: 'jhon',
    lastName: 'ebrio',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    name: 'sacha',
    lastName: 'gray',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    name: 'rachel',
    lastName: 'star',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  },
  {
    name: 'mia',
    lastName: 'kalifa',
    perfilImg: '/static/friend-4.jpg',
    frontPageQuote: 'No tengo nada que decir, solo entre aqui a subir mis videos para ganar greencoins'
  }
];*/

class PerfilNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      history: '',
      imgUrl: null,
      posts:[],
      addModal: false,
      reqFriend: [],
      currentUser: '',
    };
    this.onToggle = this.onToggle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentWillMount() {
    const { posts, user } = this.props;
    this.setState({ posts: posts, reqFriend: user.friendReq });
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('id');
    this.setState({ currentUser });
  }

  onToggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  onChangeText(e) {
    this.setState({ history: e.target.value });
  }
  onChangeImg(e) {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend= () => {
      this.setState({ imgUrl: reader.result });
    }
    if (img) {
      this.setState({ imgUrl: reader.readAsDataURL(img) });
    } else {
      this.setState({ imgUrl: null });
    }
  }

  addPost(e) {
    e.preventDefault()
    const date = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day:'numeric' });
    const { history, posts, imgUrl, addModal } = this.state;
    const { id, user } = this.props;
    const authorName = `${user.name} ${user.lastName}`;
    const authorImg = user.perfilImg;
    const newPost = {
      author: {
        img: authorImg,
        name:authorName,
      },
      date,
      imgUrl,
      history,
    };
    const data = {
      id,
      author: newPost.author,
      date: newPost.date,
      imgUrl: newPost.imgUrl,
      history: newPost.history,
    }
    this.setState({ addModal: true });
    fetch('/api/newPost.js', {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ history: '', imgUrl: null, posts: [newPost, ...this.state.posts], addModal: false  });
        }
      })
      .catch(err => console.log(err));
  }
  
  render() {
    const {
      activeTab,
      history,
      imgUrl,
      posts,
      addModal,
      reqFriend,
      currentUser
    } = this.state;
    const { store, user } = this.props;
    return (
      <div>
        {
          store && <Store />
        }
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1', nav_item: this.state.activeTab !== '1'  })}
              onClick={()=>{this.onToggle('1')}}
            >
              Muro
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2', nav_item: this.state.activeTab !== '2'  })}
              onClick={()=>{this.onToggle('2')}}
            >
              Historia
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3', nav_item: this.state.activeTab !== '3'  })}
              onClick={()=>{this.onToggle('3')}}
            >
              Amigos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4', nav_item: this.state.activeTab !== '4'  })}
              onClick={()=>{this.onToggle('4')}}
            >
              Deseos
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} >
          <TabPane tabId='1'>
            <Row>
              <Col sm="12">
                {
                  currentUser === user._id && (
                    <div>
                      <AddPost
                      value={history}
                      onChangeText={this.onChangeText}
                      img={imgUrl}
                      onChangeImg={this.onChangeImg}
                      onSubmit={this.addPost}
                      modal={addModal}
                    />
                      <div className="line" />
                    </div>
                  )
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <CardPost posts={posts}  />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm="12">
                <h2>Tab 2</h2>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm="12">
                <h3>Solicitudes de amistad</h3>
                <div className="friends_main_cont">
                  {
                    <Friends 
                      users={reqFriend}
                    />
                  }                
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='4'>
            <Row>
              <Col sm="12">
                <h2>Tab 4</h2>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
};

const mapStateToProps = state => ({ store: state.store });

export default connect(mapStateToProps)(PerfilNav);

