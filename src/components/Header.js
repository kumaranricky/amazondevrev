import './header.css';
const Header = () => {
  return(
    <header className="header">
      <div className="header__logo">
       
        <span className="header__logoName">Amazon</span>
      </div>
      <div className="header__search">
        <input />
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__lineOne">Hello Guest</span>
          <span className="header__nav__lineTwo">Sign In</span>
        </div>
        <div className="header__nav__itemBasket">
          Cart
        </div>
      </div>
    </header>
  )
}

export default Header;