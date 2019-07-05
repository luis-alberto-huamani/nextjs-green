import Reacr, { Component } from 'react';
import './about.scss';

const About = () => (
  <section className="about_main_cont">
    <div className="container-fluid">
      <div className="container_relative">
        <h1>EL mundo es tuyo, cuidalo!</h1>
        <div className="line" />
        <p>
          Greenlink parte de la iniciativa del cambio, Somos la unica red social dispuesta a unir personas por un mundo mas limpio. Mas de 1000 especies hoy en dia estan en la lista de peligro de extigncion, especies que incluso llevan en el mundo mas tiempo que el hombre. Nuestro estilo de vida esta deborando la vida en la tierra a un paso alarmante. En greenlink incentivamos la union, la celebracion de la vida, el amor. Nuestra moneda busca aportar a ese cambio.
        </p>
        <a href="#more">¿Quieres saber mas?</a>
      </div>
    </div>
  </section>
);

export default About;
