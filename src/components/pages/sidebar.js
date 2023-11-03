import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import instagram from '../image/Instagram.png'
import pinterset from '../image/Pinterest.png'
import facebook from '../image/Facebook.png'
import twiter from '../image/Twitter.png'
import telegram from '../image/Telegram.png'

export const Sidebar = ({sidebar}) => {
  return   (
    <>  
    <div className={sidebar?"sidebar sidebar-open ":"sidebar"}>
      <div className="options">
        <li><Link to="">Sign in</Link ></li>
        <li><Link to="">Shop</Link ></li>
        <li><Link to="">Servise</Link ></li>
        <li><Link to="">Contact</Link ></li>
        <li><Link to="">About us</Link ></li>
        <li className='sidebar-info'>
          <p>Shipping & returns</p>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
        </li>
        <li className='icon-sidebar'    >
        <img src={instagram} alt="" />
             <img src={pinterset} alt="" />
             <img src={facebook} alt="" />
             <img src={twiter} alt="" />
             <img src={telegram} alt="" />
        </li>

      </div>
      <div className="free"></div>
    </div>
    <Outlet/>
      </>
  )
}
