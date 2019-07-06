import React, { Component } from 'react';
import HeaderPost from '../components/postregistro/header';
import BodyPost from '../components/postregistro/body';

const PostRegistro = ({ id }) => (
  <section>
    <HeaderPost />
    <BodyPost id={id} />
  </section>
);


PostRegistro.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
}

export default PostRegistro;
