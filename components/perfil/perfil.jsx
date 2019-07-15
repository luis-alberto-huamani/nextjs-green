import React, { Component } from 'react';
import './perfil.scss';
import PerfilHeader from './perfil-header';
import PerfilNav from './perfil-nav';


class Perfil extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return(
      <div className="perfil_main_cont">
        <PerfilHeader user={user} />
        <PerfilNav user={user} id={user._id} posts={user.posts} />
      </div>
    );
  }
}

export default Perfil;
