import logo from './assets/little-lemon-logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" className="header-logo" />
    </header>
  );
}

export default Header;