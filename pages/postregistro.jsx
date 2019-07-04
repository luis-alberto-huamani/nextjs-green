import React, { Component } from 'react';
import HeaderPost from '../components/postregistro/header';
import BodyPost from '../components/postregistro/body';

class PostRegistro extends Component{
  constructor(props){
    super(props);
    this.state = {
      mail: '',
    }
  }

  render() {
    return(
      <section>
        <HeaderPost />
        <BodyPost />
      </section>
    );
  }
};

export default PostRegistro;
