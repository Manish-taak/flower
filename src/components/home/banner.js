import React from 'react'
// import image from '../image/flowerimage1.png'
import image2 from '../image/img hero.png'
// import rightarrow from '../image/arrow-right.png'
import Rimage from '../image/rrrr.png'
// import image3 from '../image/card item.png'
// import left from '../image/arrow-left.png'
import Card from '../json/Card.json'
const Banner = () => {
  return (
    <>
      <section>
          <div className="grid-banner">
          <div className="item1">
              <div className="top-item-1">
                <h2 className='item-1-h2-text'>
                  Kyiv <br /> LuxeBouquets
                  <img alt='img-banner' src={Rimage} />
                </h2>
                <p className='item-1-p-text common-p-18 '>
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                </p>
              </div>
              <div className="buttom-item-1">
                <div className="buttom-item-1-left-image">
                  <img alt='img-banner' src={image2} />
                </div>
                <div className="buttom-item-1-right-text">
                  <p className='common-p-14' >Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
              </div>
            </div>
            <div className="item2">
               {
                Card.map((index, item) => {
                  return (
                    <div className="item2-firstchild" key={item} >
                      <div className="item-2-box-1 ">
                        <h2 className='item-box-2-h2-text common-h-38 ' >{index["flowerstext"]}</h2>
                        <div className="shop-now">
                          <p className='shop-now-p-text common-p-16 ' >{index["shop"]}</p>
                          <img className='left-image-banner-arrow'alt='img-banner' src={require(`../image/${index["right"]}`)} />
                        </div>
                      </div>
                      <div className="item-2-box">
                        <img alt='img-banner' src={require(`../image/${index["flowerimage"]}`)} />
                      </div>
                      <div className="item-2-box">
                        <img alt='img-banner' src={require(`../image/${index["flowerimage2"]}`)} />
                      </div>
                      <div className="item-2-box-1">
                        <h2>{index["flowerstext2"]}</h2>
                        <div className="shop-now">
                          <img className='left-image-banner-arrow' alt='img-banner' src={require(`../image/${index["left"]}`)} />
                          <p className='shop-now-p-text common-p-16 ' >{index["shop"]}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div> 
          </div>
      </section> 
    </>
  )
}

export default Banner