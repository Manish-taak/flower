import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Google from '../image/google logo.png'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Client = () => {
  return (
    <>
    <section className="clients">
      <div className="clients-main">
        <div className="clients-top">
          <img src={Google} alt="" />
          <p className='clients-p-text' >Reviews</p>
          <h2 className='clients-h2-text common-h-50 ' >Our Clients say</h2>
        </div>
        <Swiper
        cssMode={true}
        // navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide>
          <div className="slides">
            <h3>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</h3>
            <p>– Ronald Richards</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <h3>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</h3>
        <p>– Ronald Richards</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <h3>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</h3>
        <p>– Ronald Richards</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <h3>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</h3>
        <p>– Ronald Richards</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <h3>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</h3>
        <p>– Ronald Richards</p>
          </div>
        </SwiperSlide>

        </Swiper>
        <button className='clients-btn btn-white'  type="button">Read reviews</button>
      </div>
    </section>
    </>
  )
}

export default Client