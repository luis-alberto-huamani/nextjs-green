import React, { Component } from 'react';
import Logo from '../logo/logo';
import './header.scss';
import Link from 'next/link';
import Head from 'next/head';

const HeaderPost = () => (
  <header className="header_post_main_cont">
    <Head>
      <link rel="stylesheet" href="/static/animate.min.css" />
    </Head>
    <div className="container-fluid">
      <div className="header_post_cont">
        <Link href="/">
          <Logo title="home" color="dark" />
        </Link>
        <Link href="/">
          <button title="cancelar" className="btn_close">X</button>
        </Link>
      </div>
    </div>
  </header>
)
export default HeaderPost;
