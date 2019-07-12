import React, { Component } from 'react';
import '../components/perfil/friends.scss';
import Friends from '../components/perfil/friends';

class Foo extends Component{
  constructor(props){
  super(props);
  this.state = {
    api: '',

  }
}

  render() {
    return(
      <div>
        <Friends users={users} />
      </div>
    );
  }
}

export default Foo;