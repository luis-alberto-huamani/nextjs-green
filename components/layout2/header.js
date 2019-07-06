import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRegister, onNav } from '../../store/actions';
import BtnResp from '../btn-resp/btn-resp';
import Logo from '../logo-2/logo';
import Link from 'next/link';
import './header.scss';
import { Button } from 'reactstrap';
import Head from 'next/head'

const Header = (props) => (
  <>
  <Head>
  <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="/static/animate.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap" rel="stylesheet" />
  </Head>
  <header className="header_main_cont">
    <Logo color="#ffffff" />
    {
      !props.login && (
        <div className="btn_cont">
          <Link href="/login">
            <Button outline size="sm">Login</Button>
          </Link>
          <p>ó</p>
          <Button onClick={props.onRegister} outline size="sm">Registro</Button>
        </div>
      )
    }
    {
      props.login && (
        <BtnResp onClick={props.onNav} />
      )
    }
  </header>
  </>
);

const mapStateToProps = state => ({ registro: state.registro, login: state.login });
const mapDispatchToProps = dispatch => bindActionCreators({ onRegister, onNav }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
