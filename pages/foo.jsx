import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import './foo.scss';
import Header from '../components/perf/header';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Quote from '../components/perf/quote';

const myUsers = [
  {
    id: '1234561',
    url:'/kadkans',
    fullName: 'jhon doe',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    id: '1234562',
    url:'/kadkans',
    fullName: 'sacha gray',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    id: '1234563',
    url:'/kadkans',
    fullName: 'rachel star',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  }
];

const  person = {
  mail: 'person4@mail.com',
  pass: '123456',
  name: 'thera',
  lastName: 'earth',
  fullName: 'thera earth',
  birthday: '13/07/2019',
  history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis! Officiis distinctio in aliquid, deleniti facilis hic animi incidunt ab nulla soluta et unde accusantium expedita sed debitis impedit est!',
  interest: 'Lorem ipsum dolor sit amet consectetur',
  perfilImg: '/static/friend-4.jpg',
  frontPageImg: '/static/hero-0.jpg',
  frontPageQuote:'-La conservación es un estado de armonía entre hombre y tierra.-Aldo Leopold.',
  wallet: 500,
  posts: [],
  friends: [],
  friendReq: [],
  gifts: 10,
  comments: [],
};

class Foo extends Component{
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      quoteVisible:true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onQuote = this.onQuote.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onQuote() {
    const { quoteVisible } = this.state;
    this.setState({ quoteVisible: !quoteVisible });
  }

  render() {
    const { quoteVisible, quote } = this.state;
    return(
      <Layout>
        <Quote
          isOpen={quoteVisible}
          onQuote={this.onQuote}
          handleChange={this.handleChange}
          quote={quote}
        />
        <Header
          user={person}
          action={{
            onQuote: this.onQuote
          }}
        />
        <div className="void_space"></div>
      </Layout>
    );
  }
}

export default Foo;
