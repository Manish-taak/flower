import React from 'react'
import chech from '../image/check_FILL0_wght300_GRAD0_opsz24.png'
import edit from '../image/edit_square.png'
const Signup = () => {


  

  return (
    <>
      
      <section className='signup'>
        <div className="signup-main-father-div">
          <div className="wellcome-child-1"></div>
          <div className="wellcome-child-2">
            <div className="wellcome-main-contant">
              <div className="wellcome-child-2-part-1">
                <h1 className='common-h-50' >Sign up</h1>
              </div>
              <div>
                <p className='wellcome-child-2-part-2-text-p' >Become a member and enjoy personalized gift recommendations, fast checkout, and more.</p>
              </div>
              <div className="wellcome-child-2-part-2">
                <div className="shipping-contect-imformation">
                  <div className="ok-arrow">
                    <img src={chech} />
                    <p>Contact information</p>
                  </div>
                  <img src={edit} />
                </div>
                <div className="enter-code-for-sms-div">
                  <p>Enter code from sms</p>
                  <div>
                    <input className='input-enter-code' type="text" name='phonenumber'  placeholder='XX XX XX' />
                    <p>Please check your phone for a message containing a code to enter</p>
                  </div>
                </div>
                <button className='btn-black' >JOIN US</button>
              </div>
              <div className="resand-code">
                <p>Didn't receive a code?</p>
                <p>Resend code</p>
              </div>
            </div>
            <div className='bottom-text-wellcome' >
              <p>Privacy Policy</p>
              <div className="row-line"></div>
              <p>Terms and Conditions</p>
            </div>
          </div>
          <div className="wellcome-child-1"></div>
        </div>
      </section>
    </>
  )
}

export default Signup