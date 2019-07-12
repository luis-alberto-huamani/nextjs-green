import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

class Foo extends Component{
  constructor(props){
  super(props);
  this.state = {
    api: '',

  }
}

  componentDidMount() {
    var pusher = new Pusher('bfb62abbe03a8b1e8c89', {
      cluster: 'us2',
      forceTLS: true
    });
    var channel = pusher.subscribe('push');
    channel.bind('my-push', data => {
      this.setState({ api: data.message });
    });
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