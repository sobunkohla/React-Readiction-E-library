import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/library.svg'
import { Link } from 'react-router-dom'
function Nav({itemNumber}) {

  function openMenu() {
    document.body.classList.add("menu--open")
  }
  function closeMenu() {
    document.body.classList.remove("menu--open")
  }
  return (
    <nav>
     <div className="nav__container">
  <Link to="/">
    <img src={LibraryLogo} alt='' className="logo"/>
  </Link>
  <ul className="nav__links"> 
    <li className="nav__list">
    <Link to="/" className="nav__link">Home
    </Link>
    </li>
    <li className="nav__list">
    <Link to="/books" className="nav__link">Books
    </Link>
    </li>
    <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon="bars" />
    </button>
    <li className='nav__icon'>
        <Link to="/cart" className='nav__link'> 
        <FontAwesomeIcon icon="shopping-cart"/>
        </Link>
       {!!itemNumber  && <span className='cart__length'>{itemNumber}</span>}
    </li>
  </ul>
  <div className="menu__backdrop">
    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
        <FontAwesomeIcon icon="times" />
    </button>
    <ul className="menu__links">
        <li className="menu__list">
            <Link className='menu__link' to="/" onClick={closeMenu}>
                Home
            </Link>
        </li>
        <li className="menu__list">
            <Link className='menu__link' to="/books" onClick={closeMenu}>
                Books
            </Link>
        </li>
        <li className="menu__list">
            <Link className='menu__link' to="/cart" onClick={closeMenu}>
                Cart
            </Link>
        </li>
    </ul>
  </div>
     </div>

    </nav>
  )
}

export default Nav