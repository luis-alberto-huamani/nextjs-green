import React, { Component } from 'react';
import '../components/perfil/friends.scss';
import Pusher from 'pusher-js';
import axios from 'axios';
import { useRouter } from 'next/router';

const Foo = ({ name }) => {
  //const router = useRouter();
  return(
    <div>
      <h1>{name}</h1>
      {console.log(name)}
    </div>
  )
}

Foo.getInitialProps = ({ query }) => {
  const { name } = query;
  return { name };
}

/*class Foo extends Component{
  constructor(props){
  super(props);
  this.state = {
    api: '',
  }
}

  componentDidMount() {
    const { api } = this.state;
    const pusher = new Pusher('bfb62abbe03a8b1e8c89', {
      cluster: 'us2',
    });
    const channel = pusher.subscribe('push');
    channel.bind('my-push', (data) => {
      this.setState({ api: data.message })
    })
  }

  render() {
    const { api } = this.state;
    return(
      <div>
        
      </div>
    );
  }
}*/

export default Foo;