import React, { Component } from 'react';
import './main.scss';
import Link from 'next/link';
import { Button } from 'reactstrap';

const userStar = {
  id:'987456321',
  fullName: 'Gloria World',
  perfilImg: '/static/star.jpg',
}
const myUsers = [
  {
    id: '1234561',
    url:'/kadkans',
    fullName: 'jhon doe',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    id: '1234562',
    url:'/kadkans',
    fullName: 'sacha gray',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    id: '1234563',
    url:'/kadkans',
    fullName: 'rachel star',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  }
];

class Main extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const artid = '1234566';
    return(
      <main className="container-fluid">
        <div className="row">
          <div className="col-12 main_article">
            <Link href={`/article/${artid}`}>
              <a title="Leer articulo" className="article">
                <h2>La india</h2>
                <div className="line" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci beatae temporibus at qui unde vero ad tempora pariatur libero explicabo, soluta dignissimos, cum veritatis sunt distinctio iusto cupiditate! Facilis?</p>
              </a>
            </Link>
          </div>
          <div className="col-4 ranking_cont">
            {
              myUsers.map((user) => (
                <Link href={`/perfil/${user.id}`}>
                  <a className="user_cont shadow">
                    <div className="user_description">
                      <img src={user.perfilImg} alt="" className="img-fluid"/>
                      <p>{user.fullName}</p>
                    </div>
                    <p className="user_rank">172%</p>
                  </a>
                </Link>
              ))
            }
          </div>
          <div className="col-8 userStar_cont shadow">
            <div className="row">
              <div className="col-6">
                <img src={userStar.perfilImg} alt="" className="img-fluid shadow"/>
              </div>
              <div className="col-6">
                <h2>{userStar.fullName}</h2>
                <p>De una total desconcida, a el usuario con mas regalos en greenlink. Gloria nos cuenta a travez de una entrevista realizada por nuestro equipo, su experiencia en greenlink, su trabajo en el reciclaje, como la ven sus fans. Gloria es una super-estrella que nos acompaña en cada evento por el cambio climatico!</p>
              </div>
              <div className="col-12 interview">
                <p className="greenlink_interviewver">Greenlink: ¿Como llegaste a nuestra red?</p>
                <p>Gloria: Un amigo me dijo un dia "oye gloria creo que esto te va a gustar", habiamos estado hablando un par de dias antes de la necesidad de una red global para promver el cambio. Las redes sociales actuales son superficiales, faltaba algo y lo encontramos en greenlink</p>
              </div>
              <div className="col-12 text-right">
                <Button size="sm" outline color="success">Leer articulo</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row article_main_cont">
          <div className="col-8">
            <Link href={`/article/id`}>
              <a className="article_cont shadow">
                <div className="img_cont">
                  <img src="/static/gorilla.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="description">
                  <h3>10 animales en peligro de extincion</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi consequuntur necessitatibus vel corrupti error veniam, beatae tenetur magnam laboriosam repellat vero! Dolore ad ex similique, reiciendis fugit temporibus velit!</p>
                </div>
              </a>
            </Link>
            <Link href={`/article/id`}>
              <a className="article_cont shadow">
                <div className="img_cont">
                  <img src="/static/niño-basura.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="description">
                  <h3>Niño filipino urgando en rio de basura</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi consequuntur necessitatibus vel corrupti error veniam, beatae tenetur magnam laboriosam repellat vero! Dolore ad ex similique, reiciendis fugit temporibus velit!</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-4 ofert_gift">
            <div className="gift_banner">
              <p>Esta navidad, sera verde con <span>greenlink...</span></p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
