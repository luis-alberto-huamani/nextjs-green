import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import '../components/perfil2/base.scss';
import persons from '../test/persons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import CountDown from '../components/perfil2/countDown';

const user = persons[3];
const gift = {
  name: 'Nike Air-band',
  price: 80,
  spot: 15,
  url:'/product/123456',
  img: '/static/shoe.jpg'
}

const perfilImgStyle = {
  background: '#669f09',
  backgroundImage: `url(${user.perfilImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
}

const Gift = () => (
  <div className="gift_cont shadow">
    <h2>Deseo</h2>
    <span> Faltan: $15</span>
    <img src={gift.img} alt={gift.name}/>
    <div className="gift_info_cont">
      <div className="gift_info">
        <a title="Ver en la tienda" href={gift.url}>{gift.name}</a>
        <span> ${gift.price}</span>
        <div className="count_down">
          <span>Finaliza: </span>
          <CountDown />
        </div>
      </div>
      <div className="spot_cont">
        <button><FontAwesomeIcon icon={faPiggyBank} /></button>
      </div>
    </div>
  </div>
);

const UserInfo = () => (
  <div className="user_info">
    <h1>{user.name} {' '} {user.lastName}</h1>
    <p>{user.frontPageQuote}</p>
    <p><span>Correo:</span> {user.mail}</p>
    <p><span>Cumpleaños:</span> 15 de julio</p>
    <p><span>Historia:</span></p>
    <p>{user.history}</p>
  </div>
);

const UserPerfil = () => (
  <div style={perfilImgStyle} className="user_perfil">

  </div>
)

class Perfil extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Layout>
        <div className="perfil_hero_cont">
          <div className="">
            <div className="row">
              <div className="perfil_info col-5">
                <UserInfo />
                <Gift />
              </div>
              <div className="col-7">
                <UserPerfil />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Perfil;
