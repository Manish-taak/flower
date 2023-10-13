import React from 'react'
import bar from '../image/bar.png'
import bar2 from '../image/bar2.png'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
    
            <div className="media">
              <img src={bar}/>
              <img src={bar2} />
            </div>
            <nav>
              <div className="navbar-left">
                <div className="nav-link-wrap-left">
                  <li > <Link to="/home"  className='li-1' >home</Link ></li>
                  <li  className='same' > <Link to="/Contact" className='li-2' >Contact</Link ></li>
                </div>
                <div className="link-block-left"></div>
              </div>
              <div className="navbar-right">
                <div className="nav-block-right"></div>
                <div className="nav-link-wrap-right">
                  <li  className='same' ><Link  to="/Singin" className='li-3' >sign in </Link ></li>
                  <li  ><Link  to="/Cart" className='li-4'>Cart</Link ></li>
                </div>
              </div>
          </nav>
          <Outlet/>
       
      </header>
      
    </>
  )
}

export default Header