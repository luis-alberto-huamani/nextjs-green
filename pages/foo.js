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
      url: '',
      name: '',
      img: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onFile = this.onFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ name: e.target.value });
  }

  onFile(e) {
    this.setState({ img: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const { img, name } = this.state;
    const data = new FormData();
    data.append('avatar', img);
    data.append('name', name);
    const options={
      method: 'POST',
      body: data,
    }
    console.log(data);
    fetch('http://localhost:4000/api/foo.js', options).then(res => res.json()).then(res => {
      this.setState({ url: res.img.path })
    });
  }

  render() {
    return(
      <section className="postregistro_main_cont">
      <img src={this.state.url} />
        <form onSubmit={this.onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
          }}
        >
          <input value={this.state.name} onChange={this.onChange} type="text" />
          <input name="avatar" onChange={this.onFile} type="file" />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
};

export default Foo;
