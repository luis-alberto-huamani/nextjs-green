import React, { Component } from 'react';
import './login.scss';
import { Button, Popover } from 'reactstrap';
import Logo from '../logo-2/logo';
import { validateEmail, validateEmpty } from '../../utils/functions';
import Fail from './fail';
import Spinner from '../spinner/spinner';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onUser, userAction } from '../../store/actions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {
      login: true,
      mail: '',
      mailLabel: false,
      mailPop: false,
      pass: '',
      passLabel: false,
      passPop: false,
      spinner: false,
      fail: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onFocus(e) {
    const label = `${e.target.id}Label`;
    const pop = `${e.target.id}Pop`;
    this.setState({ [label]: true, [pop]: false  });
  }

  onBlur(e) {
    const label = `${e.target.id}Label`;
    this.setState({ [label]: false });
  }

  onSubmit(e) {
    const { mail, pass } = this.state;
    const { onUser } = this.props;
    e.preventDefault();
    if (!validateEmail(mail)) {
      this.setState({ mailPop: true });
    } else if (!validateEmpty(pass)) {
      this.setState({ passPop: true });
    } else {
      this.setState({ spinner: true, login: false })
      const data = {
        mail: mail,
        pass: pass,
      }
      fetch('/api/login.js', {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(res => {
          if (res.status === 201) {
            this.setState({ spinner: false, login: true });
            res.json()
              .then(resp => {
                console.log(resp._id);
                localStorage.setItem('id', resp._id);
                const payload = {
                  action: userAction.LOG_IN,
                  data: resp,
                }
                onUser(payload);
                Router.push(`/perfil?id=${resp._id}`);
              })
          } else {
              this.setState({ fail: true, login: false, spinner: false });
              setTimeout(() => {
                this.setState({ login: true, fail: false });
              }, 3000)
            }
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const {
      login,
      mail,
      mailLabel,
      mailPop,
      pass,
      passLabel,
      passPop,
      spinner,
      fail,
    } = this.state;
    return(
      <section className="login_main_cont animated fadeIn">
        {
          login && (
            <div className="form_cont">
              <div className="form_header">
                <Logo color="#669f09" logoWidth="30px" fontSize="1.2rem" />
              </div>
              <form method='POST' className="form_login" onSubmit={this.onSubmit}>
                <div className="input_cont" style={mailPop ? { borderBottomColor: '#ff6c1a'} : {borderBottomColor: "#669f09"}}>
                  <label htmlFor="mail" style={ mailLabel ? {color: '#8bb940', background: '#fff'} : {color: 'transparent', background: 'transparent'}}>mail</label>
                  <input
                    id="mail"
                    name="mail"
                    type="text"
                    className="green_input"
                    placeholder="Correo electronico"
                    value={mail}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                  />
                  <Popover className="popMsg" placement="right" target="mail" isOpen={mailPop}>
                    <p>La direccion de correo no es valida</p>
                  </Popover>
                </div>
                <div className="input_cont" style={passPop ? { borderBottomColor: '#ff6c1a'} : {borderBottomColor: "#669f09"}}>
                  <label htmlFor="pass" style={ passLabel ? {color: '#8bb940', background: '#fff'} : {color: 'transparent', background: 'transparent'} }>pass</label>
                  <input
                    id="pass"
                    name="pass"
                    type="password"
                    className="green_input"
                    placeholder="Contraseña"
                    value={pass}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                  />
                  <Popover className="popMsg" placement="right" target="pass" isOpen={passPop}>
                    <p>La contraseña no es valida</p>
                  </Popover>
                </div>
                <Button type="submit">entrar</Button>
              </form>
          </div>
          )
        }
        {
          fail && <Fail className="animated fadeInDown" text="Correo o contraseña invalido" />
        }
        {
          spinner && <Spinner />
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({ userStore: state.user });
const mapDispatchToProps = dispatch => bindActionCreators({ onUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
