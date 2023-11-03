import React from 'react'
import right from '../image/Right colum.png'
import call from '../image/call.png'
import pin from '../image/pin_drop.png'
import telegram from '../image/Telegram.png'
import facebook from '../image/Facebook.png'
import twiter from '../image/Twitter.png'
import pinterest from '../image/Pinterest.png'
import instagram from '../image/Instagram.png'
const Contact = () => {
  return (
    <>
      <section>
          <div className="contact">
            <div className="contact-left">
              <div className="contact-left-top">
                <h2 className='common-h-50' >To Contact Us</h2>
                <div className="wewill">
                    <p className='common-p-18' >We will call you back</p>
                    <div className="input-btn">
                      <input  className='input-contact' placeholder=' +360 xx xxx xx xx' type="text" />
                      <button className='btn-contact btn-black  ' >book a call </button>
                    </div>
                </div> 
              </div>
              <div className="contact-left-buttom">
                <div className="contact-left-buttom-child-1">
                  <div className="phone">
                    <h2 className='common-h-38' >Phone</h2>
                  </div>
                  <div className="phone-number">
                    <div className="first-number">
                      <img src={call} />
                      <div>
                      <p>+380980099777</p>
                      </div>
                    </div>
                    <div className="first-number">
                      <img src={call} />
                      <div>
                      <p>+380980099111</p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-left-buttom-child-2">
                <div className="phone">
                    <h2 className='common-h-38' >Address</h2>
                  </div>
                  <div className="phone-number">
                    <div className="first-number">
                       <p className='common-p-16' >+opening hours: 8 to 11 p.m.</p>
                    </div>
                    <div className="first-number">
                      <img src={pin} />
                      <div>
                      <p className='common-p-16' >+15/4 Khreshchatyk Street, Kyiv </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <div className="right-contact-image">
               <img className='kyiv-contact-image' src={right} />
               <div className="right-image-buttom-text-icon">
                  <div className="follow-icon">
                   <h2 className='common-h-38' >
                    Follow us
                   </h2>
                  </div>
                  <div className="follow-icon">
                    <img src={instagram} />
                    <img src={pinterest} />
                    <img src={facebook} />
                    <img src={twiter} />
                    <img src={telegram} />
                  </div>
               </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact