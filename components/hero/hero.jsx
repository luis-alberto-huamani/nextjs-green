import React, { Component } from 'react';
import Heart from '../social-buttons/heart';
import Gift from '../social-buttons/gift';
import Comment from '../social-buttons/comment';
import Share from '../social-buttons/share';
import Button from '../buttons/button';
import RegisterCont from './register-cont';
import Input from '../form/input';
import { validateEmail, validateEmpty } from '../../utils/functions';
import Router from 'next/router';
import './hero.scss';

class Hero extends Component{
  constructor(props){
    super(props);
    this.state= {
      register: false,
      mail: '',
      mailPop: false,
      pass: '',
      passPop: false,
    }
    this.onRegister = this.onRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }s

  onRegister() {
    const { register } = this.state;
    this.setState({ register: !register  });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleFocus(e) {
    const element = `${e.target.id}Pop`;
    this.setState({ [element]: false });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      mail,
      pass,
    } = this.state;
    if (!validateEmail(mail.trim().toLocaleLowerCase())) {
      this.setState({ mailPop: true });
    } else if (!validateEmpty(pass)) {
      this.setState({ passPop: true });
    } else {
      const data = {
        mail: mail.trim().toLocaleLowerCase(),
        pass: pass,
      }
      Router.push('/postregistro')
    }
  }

  render() {
    const {
      register,
      mail,
      mailPop,
      pass,
      passPop,
    } = this.state;
    const arrowCircle = <svg className="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" /></svg>
    return(
      <section className="hero_main_cont">
      <p className="vertical_text">La unica red social donde puedes ganar regalos y criptomonedas mientras te diviertes y ayudas al planeta</p>
        <RegisterCont isOpen={register}>
          
          <h1>Registro</h1>
          <form onSubmit={this.onSubmit}>
            <div className="inputs_cont">
              <Input
                id="mail"
                type="text"
                value={mail}
                pop={mailPop}
                popText="El correo no es valido"
                color="light"
                placeholder="indique su direccion de correo"
                label="Correo"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
              />
              <Input
                id="pass"
                type="password"
                value={pass}
                pop={passPop}
                popText="No puede estar vacio"
                color="light"
                placeholder="Contraseña"
                label="Contraseña"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
              />
            </div>
            <button type="submit" className="btn_next">{arrowCircle}</button>
          </form>
        </RegisterCont>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="social_nav_cont">
                <nav className="social_nav">
                  <Heart />
                  <Share />
                  <Gift />
                  <Comment />
                </nav>
              </div>
            </div>
            <div className="col-7">
              <div className="msg_cont">
                <div className="msg_cont-2">
                  <Button onClick={this.onRegister} size="lg" color="light">Unete</Button>
                  <p>A Greenlink y</p>
                </div>
                <div className="msg_cont-1">
                  <h1>Comparte</h1>
                  <div className="msg_complementary">
                    <p>Disfruta,</p>
                    <p>Diviertete,</p>
                    <p>Gana greencoins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default Hero;
