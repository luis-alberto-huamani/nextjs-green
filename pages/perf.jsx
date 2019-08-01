import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import './foo.scss';
import Header from '../components/perf/header';
import Quote from '../components/perf/quote';
import uuid from 'uuid/v1';
import axios from 'axios';
import { Modal, ModalBody, Button } from 'reactstrap';

class Perfil extends Component{
  static getInitialProps = ({ query }) => {
    const { user } = query;
    return { user };
  }

  constructor(props){
    super(props);
    this.state = {
      id: '',
      perfilImg: '',
      perfilLoader: false,
      fullName: '',
      frontPageQuote: '',
      frontPageImg: '',
      frontPageLoader: false,
      quoteVisible: false,
      owner: null,
      friendReqLoader: false,
      friendReqSent: '',
      confirmationMsg: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.onQuote = this.onQuote.bind(this);
    this.onFriendReq = this.onFriendReq.bind(this);
    this.accpetFriend = this.accpetFriend.bind(this);
    this.cancelFriendReq = this.cancelFriendReq.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);
    this.rmFriend = this.rmFriend.bind(this);
  }

  componentWillMount(){
    const { user } = this.props;
    const fullName = `${user.name} ${user.lastName}`;
    this.setState({
      id: user.id,
      perfilImg: user.perfilImg,
      fullName,
      frontPageQuote: user.frontPageQuote,
      frontPageImg: user.frontPageImg,
      owner: user.owner,
      friendReqSent: user.friend,
    })
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleChangeImg(e) {
    const img = e.target.files[0];
    const formData = new FormData();
    const stateImg = `${e.target.id}Img`;
    const loader = `${e.target.id}Loader`;
    formData.append('file', img);
    if(img) {
      const options = {
        method: "POST",
        body: formData,
      };
      this.setState({ [loader]: true });
      fetch(`/api/upload/${stateImg}`, options)
        .then(res => {
          if (res.status === 200) {
            res.text()
              .then(resp => {
                this.setState({ [stateImg]: resp, [loader]: false  });
              })
          }
        })
    }
  }

  async accpetFriend(e){
    this.setState({ friendReqLoader: true });
    try{
      const targetId = e.target.id;
      await axios.get(`/aceptFriend/${targetId}`);
      this.setState({ friendReqSent: 'accepted', friendReqLoader: false })
    } catch(err) {
      console.log(err);
    }
  }

  onQuote() {
    const { quoteVisible } = this.state;
    this.setState({ quoteVisible: !quoteVisible });
  }

  async onFriendReq(e) {
    this.setState({ friendReqLoader: true });
    try{
      const { id } = this.state ;
      const response = await axios.get(`/sendFriendReq/${id}`);
      this.setState({ friendReqLoader: false, friendReqSent: 'sent'  });
    } catch (err) {
      console.log(err);
    }
  }

  async cancelFriendReq() {
    try{
      const { id }  = this.state;
      await axios.get(`/cancelFriendReq/${id}`);
      this.setState({ friendReqSent: '' });
    } catch(err) {
      console.log(err);
    }
  }

  onConfirmation() {
    this.setState({ confirmationMsg: !this.state.confirmationMsg });
  }

  async rmFriend(){
    try {
      const { id } = this.state;
      await axios.get(`/rmFriend/${id}`);
      this.setState({ friendReqSent: '', confirmationMsg: !this.state.confirmationMsg });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const {
      id,
      perfilImg,
      perfilLoader,
      fullName,
      quoteVisible,
      frontPageQuote,
      frontPageImg,
      frontPageLoader,
      owner,
      friendReqLoader,
      friendReqSent,
      confirmationMsg,
    } = this.state;
    return(
      <Layout>
        <Quote
          isOpen={quoteVisible}
          onQuote={this.onQuote}
          handleChange={this.handleChange}
          quote={frontPageQuote}
          owner={owner}
        />
        <Modal isOpen={confirmationMsg}>
          <ModalBody>
            <div className="confirmation_cont">
              <p>Seguro que desea eliminar a <span>{fullName}</span></p>
              <div className="confirmation_btn_cont">
                <Button size="sm" onClick={this.onConfirmation} color="secondary">No</Button>
                <Button size="sm" onClick={this.rmFriend} color="success">Si</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
        <Header
          user={{
            id,
            perfilImg,
            fullName,
            frontPageImg,
            frontPageQuote,
            friendReqSent,
          }}
          owner={owner}
          frontPageLoader={frontPageLoader}
          perfilLoader={perfilLoader}
          friendReqLoader={friendReqLoader}
          action={{
            onQuote: this.onQuote,
            handleChangeImg: this.handleChangeImg,
            onFriendReq: this.onFriendReq,
            accpetFriend: this.accpetFriend,
            cancelFriendReq: this.cancelFriendReq,
            onConfirmation: this.onConfirmation
          }}
        />
        <div className="void_space"></div>
      </Layout>
    );
  }
}

export default Perfil;
