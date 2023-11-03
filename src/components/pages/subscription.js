import React from 'react'
import sub1 from '../image/subscription-left.png'
import json1sub from "../json/subscription.json"
import right from '../image/right-subscription.png'
import json2sub from '../json/subscription2.json'
import bottomarrow from '../image/arrow-bottom-right.png'
import arrowtop from '../image/arrow-top-right.png'
const Subscription = () => {
  return (
    <>
      <section className='subscription'>
        <div className="subscrption-child-1">
          <div className="left-subscription">
            <img src={sub1} />
          </div>
          <div className="right-subscription">
            <div className="top-sub">
              <div>
                <h1 className='top-sub-h1  common-h-50 ' >Flower Subscription</h1>
              </div>
              <div className='yourself-text' >
                <p>For Yourself</p>
                <li typeof='circle' >The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
              </div>
              <div className='yourself-text' >
                <p>As a Gift</p>
                <li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
              </div>
              <div className='yourself-text' >
                <p>For Business</p>
                <li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>
              </div>
            </div>
            <button className='btn-subscription btn-white' >Explore Plans</button>
          </div>
        </div>
      </section>

      <section className='subscription-section-2' >
        <div className="subscription-section-2-left  ">
          <h2 className=' sub-sec-2-text-h2  common-h-50' > How does it work?  </h2>
        </div>
        <div className='section-2-right-subscription'>
          {
            json1sub.map((index, item) => {
              return (
                <div className="section-2-subscription-map-boxs" key={item} >
                  <h2 className='common-h-38'>{index["text-1"]}</h2>
                  <p className='common-p-16' >{index["p-text"]}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='section-3-subscription'>
        <div className="section-3-left-sub">
          <div className="section-3-left-sub-part-1">
            <p>Build Your Subscription</p>
            <div className="sub-part-1-inner">
              <h2>Selecting a Plan  </h2>
              <p>Enjoy free shipping on every order and save up to 30%.
                Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.</p>
            </div>
            <div className="product-subscription-map"></div>
            {
              json2sub.map((index, item) => {
                return (
                  <div className="sub-part-2-inner" key={item} >
                    <div className="select-all-image-text">
                      <div className="select-image-box">
                        <img src={require(`../image/${index["leftimage"]}`)} />
                      </div>
                      <div className="left-select-text">
                        <p>{index["right-h2"]}</p>
                        <div className="left-select-text-bottom">
                          <li>{index["li1"]} </li>
                          <li>{index["li2"]}</li>
                          <li>{index["li3"]}</li>
                          <li>{index["li4"]}</li>
                          <li>{index["li5"]}</li>
                          <li>{index["li6"]}</li>
                        </div>
                      </div>
                    </div>
                    <button className='select-btn-sub btn-black ' >  SELECT</button>
                  </div>
                )
              })
            }
          </div>
          <div className="section-3-left-sub-part-3">
            <div className="linefree"></div>
            <div className="linefree"></div>
            <div className="delivered">
              <div>
                <h3 className='delivered-h2 common-h-28 '  >How often do you want flowers delivered ?</h3>
                <p>Select the delivery frequency</p>
              </div>
              <div className="Monthly-btns">
                <button className='btn-3-same btn-white '  >Monthly</button>
                <button className='btn-3-same btn-white '  >Bi-Weekly</button>
                <button className='btn-3-same btn-white '  >Weekly</button>
              </div>
            </div>
            <div className="linefree"></div>
            <div className="delivered">
              <div>
                <h3 className='delivered-h2 common-h-28 '  >How many deliveries would you like ?</h3>
                <p>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
              </div>
              <div className="inputs-plus-minus">
                <button className=' minus-bnt-plus  btn-white' >-</button>
                <button className=' minus-bnt-plus  btn-white'>1</button>
                <button className=' minus-bnt-plus  btn-white'> +</button>
              </div>
            </div>
            <div className="linefree"></div>
            <button className='btn-black' >CHECKOUT </button>
          </div>
        </div>
        <div className="section-3-right-sub">
          <img src={right} />
        </div>
      </section>

      <section className='section-4-subscripiton'  >
        <div className="section-4-part-main">
          <h1>Subscription FAQ</h1>
          <div className="subscription-faq">
            <div className="faq-box-1">
              <div className="faq-box-1-inner">
                <h3 className='common-h-28' >How often will I get a new bouquet? </h3>
                <img src={arrowtop} />
              </div>
              <p className='sub-faq-p-text common-p-16 '  >Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
            </div>
            <div className="faq-box-1-to-5">
              <h3  className='common-h-28' >Can i send subscription like as a gift ?  </h3>
              <img src={bottomarrow} />
            </div>
            <div className="faq-box-1-to-5">
              <h3  className='common-h-28' >Can i send subscription like as a gift ?  </h3>
              <img src={bottomarrow} />
            </div>
            <div className="faq-box-1-to-5">
              <h3  className='common-h-28' >Can i send subscription like as a gift ?  </h3>
              <img src={bottomarrow} />
            </div>
            <div className="faq-box-1-to-5">
              <h3  className='common-h-28' >Can i send subscription like as a gift ?  </h3>
              <img src={bottomarrow} />
            </div>
            <div className="faq-box-1-to-5">
              <h3  className='common-h-28' >Can i send subscription like as a gift ?  </h3>
              <img src={bottomarrow} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Subscription