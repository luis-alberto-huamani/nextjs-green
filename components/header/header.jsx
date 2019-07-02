import Link from 'next/link';
import Button from '../buttons/button';
import Logo from '../logo/logo';
import './header.scss';

const Header = () => (
  <header className="header_main">
    <div className="container-fluid header_main_cont">
      <Logo />
      <nav>
        <Button color="light">Login</Button>
      </nav>
    </div>
  </header>
);

export default Header;
