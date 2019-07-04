import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import Button from '../components/buttons/button';
import Input from '../components/form/input';
import InputDate from '../components/form/date';
import HeaderPost from '../components/postregistro/header';
import Header from '../components/header/header';

class Foo extends Component{
  constructor(props){
    super(props);
    this.state = {
      mail: '',
    }
  }

  render() {
    return(
      <section className="postregistro_main_cont">
        <Header />
      </section>
    );
  }
};

export default Foo;
