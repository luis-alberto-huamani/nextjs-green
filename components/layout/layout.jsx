import Header from '../header/header';
import Head from 'next/head';
import '../../layout/base.scss';

const Layout = ({ children }) => (
  <div className="layout_cont">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="/static/animate.min.css"/>
      <title>Greenlink | Comparte con los tuyos</title>
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;