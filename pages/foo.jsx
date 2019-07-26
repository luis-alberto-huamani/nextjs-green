import React, { Component } from 'react';
import Layout from '../components/layout/layout';

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


/*class Foo extends Component{
  constructor(props){
    super(props);
    this.state = {
      suggestion: [],
      input: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input, suggestion } = this.state;
    const usrInput = e.target.value;
    let mySuggestion = [];
    if (usrInput) {
      mySuggestion = myUsers.filter((item) => {
        return item.fullName.indexOf(usrInput) > -1;
      });
    }
    this.setState({ suggestion: [...mySuggestion] });
    console.log(mySuggestion);
  }

  render() {
    const {
      suggestion,
      input,
    } = this.state
    return (
      <div>
        <input onChange={this.onChange} type="text"/>
        <ul>
          {
            suggestion.map(item => <li>{item.fullName}</li>)
          }
        </ul>
      </div>
    );
  }
}*/

const Foo = () => (
  <Layout>

  </Layout>
)

export default Foo;
