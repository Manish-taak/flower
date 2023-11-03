import React from 'react'
import bar from '../image/bar.png'
import bar2 from '../image/bar2.png'
import { Link, Outlet } from 'react-router-dom'
import closebutton from "../image/close button.png"

const Header = ({ click, toggle, signup, clickcart, toggle2 }) => {
  return (
    <>
      <header>
        <div className="media">
          {
            toggle ? (<img src={closebutton} alt='dssa' onClick={click} className='toggle1' />) : (<img src={bar} alt='dssa' onClick={click} className='toggle1' />)
          }
          {
            toggle2 ? (<img src={closebutton}  alt='dssa' onClick={clickcart} className='toggle1' />) : (<img src={bar2} alt='dssa' onClick={clickcart} className='cart-toggle toggle1`  ' />)
          }
          {/* <img src={bar2} alt='dssa' onClick={clickcart} className='cart-toggle' /> */}
          </div>
        <nav>
          <div className="navbar-left">
            <div className="nav-link-wrap-left">
              <li> <Link style={{ textDecoration: 'none' }} to="/" className='li-1' >home</Link></li>
              <li className='same' > <Link style={{ textDecoration: 'none' }} to="/Wellcome" className='li-2' >Contact</Link></li>
            </div>
            <div className="link-block-left"></div>
          </div>
          <div className="navbar-right">
            <div className="nav-block-right"></div>
            <div className="nav-link-wrap-right">
              <li className='same' ><Link style={{ textDecoration: 'none' }} to="/Signup" className='li-3'   >sign in  </Link></li>
              <li>
                {
                  toggle2 ? (<img src={closebutton} alt='dssa' onClick={clickcart} className='toggle1' />) : (<Link style={{ textDecoration: 'none' }} to="" onClick={clickcart} className='li-4'>Cart</Link>)
                }
              </li>
            </div>
          </div>
        </nav>

      </header>
      <Outlet />

    </>
  )
}

export default Header
