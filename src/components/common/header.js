import React from 'react'
import bar from '../image/bar.png'
import bar2 from '../image/bar2.png'
import { Link, Outlet } from 'react-router-dom'
// import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
            <nav className="media">
              <img src={bar}/>
              <img src={bar2} />
            </nav>
            <nav>
              <div className="navbar-left">
                <div className="nav-link-wrap-left">
                  <li > <Link className='li-1' to="/Shop">Shop</Link ></li>
                  <li  className='same' > <Link className='li-2' to="/Contact">Contact</Link ></li>
                </div>
                <div className="link-block-left"></div>
              </div>
              <div className="navbar-right">
                <div className="nav-block-right"></div>
                <div className="nav-link-wrap-right">
                  <li  className='same' ><Link className='li-3' to="/Singin">sing in</Link ></li>
                  <li  ><Link className='li-4' to="/Cart">Cart</Link ></li>
                </div>
        
              </div>
          </nav>
          <Outlet/>
        </div>
      </header>
    </>
  )
}

export default Header