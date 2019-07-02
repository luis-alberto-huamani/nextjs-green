import React, { Component } from 'react';
import Heart from '../social-buttons/heart';
import Gift from '../social-buttons/gift';
import Comment from '../social-buttons/comment';
import Share from '../social-buttons/share';
import Button from '../buttons/button';
import './hero.scss';

class Hero extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <section className="hero_main_cont">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="social_nav_cont">
                <nav className="social_nav">
                  <Heart />
                  <Share />
                  <Gift />
                  <Comment />
                </nav>
              </div>
            </div>
            <div className="col-8">
              <div className="msg_cont">
                <div className="msg_cont-2">
                  <Button size="lg" color="light">Unete</Button>
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
