import React from 'react'
import productjson from '../json/product.json'
import productimage from '../image/left-colum-product.png'
import right from '../image/right-arrow.png'
import left from '../image/left-arrow.png'
import json2 from '../json/productpart2.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import './styles.css';

// import required modules
import {Pagination , Navigation , Mousewheel, Keyboard } from 'swiper/modules';


const Product = () => {
  return (
    <section className='product' >
      <div className="product-main">
        <div className="product-left">
          <img src={productimage} />
        </div>
        <div className="product-right">
          <div className="product-main-part-1">
            <p className='product-main-parts-text-p common-p-16 ' >Fresh Flowers / Rosy Delight</p>
            <div className="product-box-2">
              <h2 className='product-box-2-text-h2 common-h-38 ' >Rosy Delight - $100</h2>
              <p className='common-p-16' >Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
            </div>
            <div className="product-box-3">
              <p>Quantity</p>
              <div className="pro-inner-box-3">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
            </div>
            <div className="product-box-4">
              <div className="product-box-4-part-1">
                <h3 className='common-p-18' >Excellent Combination with:</h3>
                <p className='product-box-4-part1-p-text' >Vase Not Included</p>
              </div>
              <div className="product-box-4-part-2">
                {/* <img className='left-right-arrow-image' src={left} /> */}
                <Swiper
                  navigation={true}
                  cssMode={true}
                  slidesPerView={4}
                  mousewheel={true}
                  keyboard={true}
                  spaceBetween={12}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // modules={[Pagination]}       
                  modules={[Navigation,Pagination, Mousewheel, Keyboard]}
                  className="mySwiper"
                >
                  {
                    productjson.map((item, index) => {
                      return (
                        <>
                          <SwiperSlide style={{
                            width:160
                          }} > <div style={{width:100}}  className="images-product-box" key={index}>
                            <img style={{width:150}} src={require(`../image/${item["image1"]}`)} />
                            <div className="name-and-price">
                              <h4 className='common-p-14 ' >{item["h3"]}</h4>
                              <p className='images-product-box-p-text '>{item["p"]}</p>
                            </div>
                          </div></SwiperSlide>
                        </>
                      )
                    })
                  }
                </Swiper>
                {/* <img className='left-right-arrow-image' src={right} /> */}
              </div>
            </div>
            <div className="product-box-5">
              <p className='common-p-18' >Price options</p>
              <div className="input-1"><input type="radio" id='part-1' />
                <label className='common-p-16' htmlFor="part-1">One time purchase. Price $100</label></div>
              <div className="input-1">
                <input type="radio" id='part-2' />
                <label className='common-p-16' htmlFor="part-2">Subscribe now, and save 25% on this order. </label>
              </div>

            </div>
          </div>
          <div className="product-main-part-2">
            <button className='product-btn btn-black '>
              Add to basket
            </button>
          </div>
        </div>
      </div>

      <div className="youmay">
        <h2 className=' text-bottom-product  common-h-38' >You may also like…</h2>
        <div className="youmayproduct">
          {
            json2.map((index, item) => {
              return (
                <div className="youmayboxs" key={item} >
                  <img src={require(`../image/${index["image-youmay"]}`)} />
                  <div className="image-text">
                    <h3 className='common-p-16' >{index["h3"]}</h3>
                    <p className=' youmay-image-text common-p-14' >{index["p"]}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default Product