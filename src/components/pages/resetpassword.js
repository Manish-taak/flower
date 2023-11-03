import React from 'react'
import chech from '../image/check_FILL0_wght300_GRAD0_opsz24.png'
import edit from '../image/edit_square.png'
const Resetpassword = () => {
  return (
    <>
      <section className='ressetpassword'>
        <div className="reset-main-father-div">
          <div className="wellcome-child-1"></div>
          <div className="wellcome-child-2">
            <div className="wellcome-main-contant">
              <div className="wellcome-child-2-part-1">
                <h1 className='common-h-50' >Reset your password</h1>
              </div>
              <div>
                <p className='wellcome-child-2-part-2-text-p' >Please provide your phone number below to receive a code for restoring access to your account</p>
              </div>
              <div className="wellcome-child-2-part-2">
                <div className="enter-code-for-sms-div">
                  <p>Enter your mobile number</p>
                  <div>
                    <input className='input-enter-code' type="text" placeholder='+380 XX XXX XX XX' />
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

export default Resetpassword