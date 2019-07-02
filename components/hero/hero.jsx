import React, { Component } from 'react';
import Heart from '../social-buttons/heart';
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
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default Hero;
