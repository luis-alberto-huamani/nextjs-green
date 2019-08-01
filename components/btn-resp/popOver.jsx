import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import Link from 'next/link';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { onLogin } from '../../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import './popOver.scss';

class PopOver extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  async logOut() {
    try{
      const { onLogin } = this.props;
      await axios.get('/logout');
      onLogin(false);
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <Popover placement="bottom" target="btn-resp" toggle={this.toggle} isOpen={this.props.popOpen}>
        <PopoverBody>
          <ul className="popOver_nav">
            <li>
              <Link href="/editar/perfil">
                <a>Editar</a>
              </Link>
            </li>
            <li>
              <Link href="/perfil/config">
                <a>Config</a>
              </Link>
            </li>
            <li>
              <button onClick={this.logOut}>Salir</button>
            </li>
          </ul>
        </PopoverBody>
      </Popover>
    );
  }
}

const mapDispatcToProps = dispatch => bindActionCreators({ onLogin }, dispatch);

export default connect(null, mapDispatcToProps)(PopOver);
