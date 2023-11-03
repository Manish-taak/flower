import React from 'react'
import instagram from '../image/Instagram.png'
import pinterset from '../image/Pinterest.png'
import facebook from '../image/Facebook.png'
import twiter from '../image/Twitter.png'
import telegram from '../image/Telegram.png'
const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="footer-main">
        <div className="footer-content">
           <p className='common-p-16' >Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
           <div className="footer-contact">
           <input type="text"  placeholder='Your Email'/>
           <button className='btn-black'  type="button">Remind</button>
           </div>
        </div>
        <div className="footer-content footer-common">
           <h2>Contact Us</h2>
           <p className='footer-p-content' >Address
            <li>15/4 Khreshchatyk Street, Kyiv </li>
           </p>
           <p className='footer-p-content' >Phone
            <li>+380980099777</li>
           </p>
           <p className='footer-p-content' >General Enquiry:
            <li>Kiev.Florist.Studio@gmail.com</li>
           </p>
           <h2>Follow Us</h2>
           <div className="sites-brands brands">
             <img src={instagram} alt="" />
             <img src={pinterset} alt="" />
             <img src={facebook} alt="" />
             <img src={twiter} alt="" />
             <img src={telegram} alt="" />
            </div>
        </div>
        <div className="footer-content footer-common">
        <h2>Shop</h2>
        <ul>
          <li><a href="">All Products</a></li>
          <li><a href="">Fresh Flowers</a></li>
          <li><a href="">Dried Flowers</a></li>
          <li><a href="">Live Plants</a></li>
          <li><a href="">Designer Vases</a></li>
          <li><a href="">Aroma Candles</a></li>
          <li><a href="">Freshener Diffuser</a></li>
        </ul>
        <h2>Service</h2>
        <ul>
          <li><a href="">Flower Subcription</a></li>
          <li><a href="">Wedding & Event Decor</a></li>
        </ul>
        </div>
        <div className="footer-content footer-common">
          <h2>About Us</h2>
           <ul>
            <li><a href="">Our story</a></li>
            <li><a href="">Blog</a></li>
           </ul>
           <ul>
            <li><a href="">Shipping & returns</a></li>
            <li><a href="">Terms & conditions</a></li>
            <li><a href="">Privacy policy</a></li>
           </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer