import React, { Component } from 'react';
import Link from 'next/link';
import Button from '../buttons/button';
import Logo from '../logo-2/logo';
import './header.scss';
import classnames from 'classnames';
import PopOver from '../btn-resp/popOver';
import Notifications from '../notifications/notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onNav, onLogin } from '../../store/actions';
import { color } from '../btn-resp/css-layout';
import uuid from 'uuid/v1';
import axios from 'axios';

const iconBars = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <style jsx>{`
      svg{
        fill: #fff;
        width: 20px;
        border: #fff;
        padding:3px;
        transition: ease .5s;
      }
      svg:hover{
        fill: ${color.danger};
        background: #fff;
      }
    `
    }
    </style>
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
  </svg>
);


class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin: true,
      down: false,
      notifications: {},
      lookup: [],
    }
    this.onSearch = this.onSearch.bind(this);
  }

  async componentWillMount() {
    try{
      const { onLogin } = this.props;
      const res = await axios.get('/notifications');
      this.setState({ notifications: res.data });
      onLogin(true);
    } catch(err) {
      console.log(err);
      onLogin(false);
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.scrollY > 30) {
        this.setState({ down: true });
      } else {
        this.setState({ down: false });
      }
    }
  }

  onSearch(e) {
    const { searchBar } = this.state.notifications;
    const userInput = e.target.value;
    if(userInput) {
      fetch(`/api/search/${userInput}`).then(res => res.json()).then(res => this.setState({ lookup: res }));
    } else {
      this.setState({ lookup: [] });
    }
  }

  render(){
    const { down, notifications, lookup } = this.state;
    const { isLogin } = this.props;
    return(
      <header
        className={classnames({
          scroll_header: down, //|| isLogin,
          header_hero_main: true,
          shadow: down,
        })}
      >

        <div className="container-fluid header_main_cont animated fadeInDown">
          <Logo />
          {
            isLogin && (
              <div className="serachBar_cont">
                <input
                  type="text"
                  placeholder="Buscar"
                  onChange={this.onSearch}
                />
                {
                  lookup.length > 0 && (
                    <ul className="lookup_cont">
                      {
                        lookup.map(item => <li key={uuid()}><Link href={item.url}><a>{item.fullName}</a></Link></li>)
                      }
                    </ul>
                  )
                }
              </div>
            )
          }
          <nav>
            {
              isLogin 
              ? (
                  <>
                    <Notifications notes={notifications}/>
                    <Link href={notifications.url}><a title="Ir a mi perfil">{notifications.name}</a></Link>
                    <button style={{background: "transparent", border: "none"}} onClick={this.props.onNav} id="btn-resp" type="button">
                      {iconBars}
                      <style jsx>{`
                        button:focus{
                          outline: none;
                        }
                      `}
                      </style>
                    </button>
                    <PopOver popOpen={this.props.nav} />
                  </>
              )
              : <Link href="/login"><button className="btn_login" color="light">Login</button></Link>
            }
          </nav>
        </div>
      </header>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ onNav, onLogin }, dispatch);
const mapStateToProps = state => ({
  isLogin: state.login,
  nav: state.nav,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

