import React, { Component } from 'react';
import socketIoClient from 'socket.io-client';

class Foo extends Component{
  constructor(props){
  super(props);
  this.state = {
    api: '',
    endpoint: 'https://socket-test.ftandcompany.now.sh/api/test.js',
  }
}

  componentDidMount() {
    fetch('https://socket-test.ftandcompany.now.sh/api/test.js', {
      headers: {"Content-Type": "application/json"},
      mode: "cors",
    }).then(res => res.text()).then(res => console.log(res));
    const { endpoint } = this.state;
    const socket = socketIoClient(endpoint);
    socket.on('fromApi', data => this.setState({ api: data }));
  }

  render() {
    return(
      <section>
        <h1>Hola mundo</h1>
        <p>{this.state.api}</p>
      </section>
    );
  }
}

export default Foo;