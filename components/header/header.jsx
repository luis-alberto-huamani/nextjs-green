import React, { Component } from 'react';
import Link from 'next/link';
import Button from '../buttons/button';
import Logo from '../logo/logo';
import './header.scss';
import classnames from 'classnames';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      down: false
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.scrollY > 50) {
        this.setState({ down: true });
      } else {
        this.setState({ down: false });
      }
    }
  }

  render(){
    const { down } = this.state;
    return(
      <header className={classnames({
        scroll_header: down,
        header_main: true,
        shadow: down,
      })}>
        <div className="container-fluid header_main_cont">
          <Logo />
          <nav>
            <Button color="light">Login</Button>
          </nav>
        </div>
      </header>
    );
  }
};
