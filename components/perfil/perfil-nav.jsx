import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import CardPost from '../card-post/card-post';
import { connect } from 'react-redux';
import Store from '../store/store';
import Link from 'next/link';
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
import uuid from 'uuid/v1';
const myUsers = [
  {
    id: '1234561',
    url:'/kadkans',
    fullName: 'jhon',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    id: '1234562',
    url:'/kadkans',
    fullName: 'sacha',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    id: '1234563',
    url:'/kadkans',
    fullName: 'rachel',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  }
];

const myFriends = [
  {
    id: '1234564',
    url:'/kadkans',
    fullName: 'mia',
    perfilImg: '/static/friend-4.jpg',
    frontPageQuote: 'No tengo nada que decir, solo entre aqui a subir mis videos para ganar greencoins'
  }
]

class PerfilNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      history: '',
      imgUrl: null,
      posts:[],
      addModal: false,
      friends: [],
      reqFriend: [],
      currentUser: '',
    };
    this.onToggle = this.onToggle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleFriend = this.handleFriend.bind(this);
  }

  componentDidMount() {
    const { posts, user } = this.props;
    const currentUser = localStorage.getItem('id');
    this.setState({ currentUser, posts: posts, reqFriend: user.friendReq, friends: user.friends });
    //this.setState({ currentUser, posts: posts, reqFriend: myUsers, friends: myFriends });
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

  handleFriend(action, id) {
    const { reqFriend, friends } = this.state;
    const currentUser = localStorage.getItem('id');
    const targetUser = id;
    const data = {
      currentUser,
      targetUser
    }
    const options = {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(data),
    }
    if (action === 'add') {
      fetch(`/api/addFriend.js`, options)
        .then(res => {
          if (res.status === 200) {
            const newReqFriends = reqFriend.filter((item) => item.id !== id);
            const newFriend = reqFriend.find((item) => item.id === id);
            this.setState({ reqFriend: newReqFriends, friends: [newFriend, ...friends] });
          }
        })
        /*const newReqFriends = reqFriend.filter((item) => item.id !== id);
        const newFriend = reqFriend.find((item) => item.id === id);
        this.setState({ reqFriend: newReqFriends, friends: [newFriend, ...friends] });*/
    }
    if (action === 'rm') {
      fetch(`/api/rmFriend.js`, options)
        .then(res => {
          if (res.status === 200) {
            const newReqFriends = reqFriend.filter((item) => item.id !== id);
            this.setState({ reqFriend: newReqFriends });
          }
        })
        //const newReqFriends = reqFriend.filter((item) => item.id !== id);
        //this.setState({ reqFriend: newReqFriends });
    }
  }
  
  render() {
    const {
      activeTab,
      history,
      imgUrl,
      posts,
      addModal,
      reqFriend,
      friends,
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
                <div className="info_perfil_con">
                  <h2>Historia</h2>
                  <p>{user.history}</p>
                </div>
                <div className="info_perfil_con">
                  <h2>intereses</h2>
                  <p>{user.interest}</p>
                </div>
                <div className="info_perfil_con">
                  <h2>correo</h2>
                  <p>{user.mail}</p>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='6'>
                <ul className="friend_main_cont">
                  {
                    friends.map((item) => (
                      <li key={uuid()}>
                        <a href={item.url}>
                          <div className="friend_cont">
                            <img className="img-fluid" src={item.perfilImg} alt=""/>
                            <p>{item.fullName}</p>
                          </div>
                        </a>
                      </li>
                    ))
                    }
                </ul>
              </Col>
              <Col sm="6">
                <div>
                <h2 style={{marginTop: '2rem', fontSize: "1rem"}}>Solicitudes de amistad</h2>
                  {
                    <Friends 
                      users={reqFriend}
                      onClick={this.handleFriend}
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

