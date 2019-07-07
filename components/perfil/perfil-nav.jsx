import React, { Component } from 'react';
import uuid from 'uuid/v1';
import fetch from 'isomorphic-unfetch';
import CardPost from '../card-post/card-post';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';
import classnames from 'classnames';
import AddPost from './add-post';
import './perfil-nav.scss';

class PerfilNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      history: '',
      imgUrl: null,
      posts:[],
      addModal: false,
    };
    this.onToggle = this.onToggle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentWillMount() {
    const { posts } = this.props;
    this.setState({ posts: posts });
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
      id: id,
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
          this.setState({ history: '', imgUrl: null, addModal: false  });
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
    } = this.state;
    return (
      <div>
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
                <AddPost
                  value={history}
                  onChangeText={this.onChangeText}
                  img={imgUrl}
                  onChangeImg={this.onChangeImg}
                  onSubmit={this.addPost}
                  modal={addModal}
                />
                <div className="line" />
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
                <h2>Tab 3</h2>
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

export default PerfilNav;
