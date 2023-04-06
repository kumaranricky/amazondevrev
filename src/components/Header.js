import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
    const { myReducer } = useStateValue();
    const [ state ] = myReducer;
  return(
    <header className="header">
      <div className="header__logo">
       <Link to="/">
          <LocalMallSharpIcon fontSize="large"/>&nbsp;
          <span className="header__logoName">Amazon</span>
        </Link>
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
          <Link to="/checkout">
              <ShoppingCartIcon fontSize="small"/>{state.cartList.length}&nbsp;Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;