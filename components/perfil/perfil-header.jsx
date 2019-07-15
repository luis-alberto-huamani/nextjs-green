import React, { Component } from 'react';
import './perfil-header.scss';
import { connect } from 'react-redux';

class PerfilHeader extends Component{
  constructor(props) {
    super(props);
    this.state={
      friendReq : false,
      localId: '',
    }
    this.onSubmitRequestFriend = this.onSubmitRequestFriend.bind(this);
  }

  async componentDidMount() {
    const localId = localStorage.getItem('id');
    this.setState({ localId });
    const { user } = this.props;
    const checkFriendReq = await user.friendReq.find(item => item.id === localId);
    if (checkFriendReq) {
      this.setState({ friendReq: true });
    }
  }

  onSubmitRequestFriend(e) {
    e.preventDefault();
    const { user } = this.props;
    const { localId } = this.state;
    const data = {
      currentUser: localId,
      targetUser: user._id,
    }
    const options = {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    }

    //fetch('/api/friendRequest.js', options)
    fetch('http://localhost:4000/api/friendRequest', options)
      .then(res => {
        if(res.status === 200) {
          this.setState({ friendReq: true });
        } else {
          this.setState({ friendReq: false });
        }
      })
  }

  render() {
    const { friendReq, localId } = this.state;
    const { user, isLogin } = this.props;
    const addFriend = <svg id={user._id} style={{ fill: '#8bb940' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path id={user._id} d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>;
    const sent = <svg style={{ fill: '#8bb940' }} title="Cancelar solicitud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" /></svg>;
    return(
      <header className="header_perfil_cont" style={{ background:`url(${user.frontPageImg})center center no-repeat`, backgroundSize: 'cover' }}>
      <div className="greeting">
        <h1>hola, me llamo {user.name}</h1>
        <div className="quote">
          <p>{user.frontPageQuote}</p>
          <div className="line" />
        </div>
      </div>
      <footer className="perfil_header_footer" />
      <div className="perfil_user_cont" style={{ background: `url(${user.perfilImg}) center top no-repeat`, backgroundSize: 'cover' }}>
        <p className="user_name">{user.name}{" "}{user.lastName}</p>
          {
            user._id !== localId && (
              !friendReq
              ? <button id={user._id} title="Enviar solicitud" onClick={this.onSubmitRequestFriend}>{addFriend}</button>
              : <button id={user._id} title="Solicitud enviada">{sent}</button>
            )
          }
      </div>
    </header>
    );
  }
}

const mapStateToProps = state => ({ isLogin: state.login });

export default connect(mapStateToProps)(PerfilHeader);

