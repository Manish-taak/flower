import React from 'react'
import aboutusimage from '../image/aboutusimage.png'
import instagram from '../image/Instagram.png'
import pinterset from '../image/Pinterest.png'
import facebook from '../image/Facebook.png'
import twiter from '../image/Twitter.png'
import telegram from '../image/Telegram.png'
import aboutjson from '../json/aboutus.json'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';



const Aboutus = () => {
  return (
    <>
      <section className='aboutus-section-1' >
        <div className="main-aboutus">
          <div className="left-aboutus">
            <div className='left-first-aboutus' >
              <h3 className='common-h-50' >Our Story </h3>
              <p>About</p>
              <h2 className='common-h-50' >Kyiv LuxeBouquets</h2>
              <p className='common-p-18' >Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
            </div>
            <div className='images-social-icon' >
              <img className='icon-insta' src={instagram} />
              <img className='icon-insta' src={pinterset} />
              <img className='icon-insta' src={facebook} />
              <img className='icon-insta' src={twiter} />
              <img className='icon-insta' src={telegram} />
            </div>
          </div>
          <div className="right-aboutus">
            <img src={aboutusimage} />
          </div>
        </div>
        <div className="Founder">
          <p className='common-p-14' >OUR STORY</p>
          <h2 className='common-h-38' >Our Founder's Passion </h2>
          <p className=' founder-p-text common-p-16' >Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
        </div>
        {
          aboutjson.map((index, item) => {
            return (
              <>
                {
                  item % 2 === 0 ?(
                    <div className="aboutus-images-text" key={item} >
                    <div className="about-image">
                      <img src={require(`../image/${index["ex-image"]}`)} />
                    </div>
                    <div className="about-text">
                      <h2 className=' about-text-h2 common-h-38' >{index["ex-tittle"]}</h2>
                      <p className='common-p-16' >{index["ex-bio"]}</p>
                    </div>
                  </div>
                  ) : (
                    <div className="aboutus-images-text" key={item} >
                    <div className="about-text">
                      <h2 className=' about-text-h2 common-h-38' >{index["ex-tittle"]}</h2>
                      <p className='common-p-16' >{index["ex-bio"]}</p>
                    </div>
                    <div className="about-image">
                      <img src={require(`../image/${index["ex-image"]}`)} />
                    </div>
                  </div>
                  )
                }
              </>
            )
          })
        }
        <div className="discover-beautiful">
          <h2>Discover Our Beautiful Bouquets</h2>
          <p className='discover-beautiful-p-text' >Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
          <button className=' btn-aboutus btn-black' > SHOP NOW </button>
        </div>
      </section>
    </>
  )
}

export default Aboutus

