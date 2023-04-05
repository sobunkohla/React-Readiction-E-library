import React from 'react'
import LibraryLogo from '../assets/library.svg'
import { Link } from 'react-router-dom'
function Footer() {
   return (
       <footer >
          <div className='container'>
                <div className='row row__column'>
            
                 <Link to="/">
                 <figure className="footer__logo" >
                    <img className="footer__logo--img" src={LibraryLogo}  />
                 </figure>
                 </Link>
                 <div className="footer__list">
                    <Link to="/" className="footer__link"> Home</Link>
                    <span className="footer__link no-cursor"> About</span>
                    <Link to="/books" className="footer__link"> Books</Link>
                    <Link to="/cart" className="footer__link"> cart</Link>
                 </div>
                 <div className="footer__copyright">
                   Copyright &copy; 2021 Readiction
                 </div>
               </div>
          </div>

       </footer>
   )
}

export default Footer