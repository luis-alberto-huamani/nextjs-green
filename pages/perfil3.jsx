import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import persons from '../test/persons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import '../components/perfil3/base.scss';

const user = persons[3];
user.birthCity = 'Lima';
user.actualCity = 'Lima';

const gift = {
  name: 'Nike Air-band',
  price: 80,
  spot: 15,
  url:'/product/123456',
  img: '/static/shoe.jpg'
};

const perfilImgStyle = {
  background: '#669f09',
  backgroundImage: `url('/static/star.jpg')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
}

export default class Perfil extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Layout>
        <div style={perfilImgStyle} className="perfil_hero_cont">
          <div className="row">
            <div className="col-6">
            
            </div>
            <div className="col-6">
              <div className="info_cont container-fluid animated slideInRight">
                <header>
                  <h1>{user.name}<span> {user.lastName}</span></h1>
                </header>
                <div className="body_info">
                  <ul>
                    <li><input type="text" value={`Correo: ${user.mail}`} disabled/><button>Editar</button></li>
                    <li><input type="text" value={`Ciudad de origen: ${user.birthCity}`} disabled/><button>Editar</button></li>
                    <li><input type="text" value={`Ciudad actual: ${user.actualCity}`} disabled/><button>Editar</button></li>
                    <li><input type="text" value={`Cumpleaño: ${user.birthday}`} disabled/><button>Editar</button></li>
                  </ul>
                </div>
                <footer>
                  <ul>
                    <li><button>informacion</button></li>
                    <li><button>historia</button></li>
                    <li><button>amigos</button></li>
                    <li><button>deseo</button></li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
