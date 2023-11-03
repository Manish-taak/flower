import React from 'react'
import vector from '../image/Vector.png'
import Rectangle from '../image/Rectangle 69.png'
import lock from '../image/lock_FILL0_wght300_GRAD0_opsz24.png'
const Checkout = () => {
  return (
    <section className='checkout'>
        <div className="checkout-left">
            <div className="checkout-left-part-1">
                <a className='checkout-left-part-1-anchor' href=""> INFRONMATION  <img src={vector} /> </a>
                <a className='checkout-left-part-1-anchor'  href="">SHIPPING <img src={vector} />  </a>
                <a className='checkout-left-part-1-anchor'  href="">PAYMENT <img src={vector} />  </a>
            </div>
            <div className="checkout-left-part-2">
                <div className="faster-checkout">
                    <p className='common-p-16' >Already have an account? <a  href="">Log in</a> for faster checkout</p>
                </div>
                <div className="dorpdown-open-contact-imformation">
                    <h2>1 Contact information</h2>
                    <div className="inputs-open-dropdown">
                        <input className='dropdown-1-input'  type="text" placeholder='Your Name' />
                        <input className='dropdown-1-input' type="text" placeholder='Your Email' />
                        <input className='dropdown-1-input' type="text" placeholder='Your Phone number *' />
                    </div>
                    <button className='shipping-bnt btn-black' >Continue to shipping</button>
                </div>
            </div>
            <div className="checkout-left-part-3">
                <p>2 Shipping details</p>
            </div>
            <div className="checkout-left-part-3">
                <p>3 Payment</p>
            </div>
        </div>
        <div className="checkout-right">
            <div className="top-right-checkout">
                <div className="top-right-checkout-chlid-1">
                    <p>Order summary</p>
                </div>
                <div className="top-right-checkout-chlid-2">
                    <div className="top-right-checkout-chlid-2-part-1">
                        <img src={Rectangle}/>
                        <div className="top-right-checkout-chlid-2-part-1-text">
                            <div>
                                <p>Snowfall</p>
                                <p>Quantity (1)</p>
                            </div>
                            <p>$100</p>
                        </div>
                    </div>
                    <div className="top-right-checkout-chlid-2-part-2">
                        <p>If you have our gift card, enter the code to get discounts</p>
                        <div className="apply-btn-plus-input">
                            <input className='input-apply'  placeholder='Gift card' type="text" />
                            <button className=' btn-apply  btn-black' >APPLY</button>
                        </div>
                    </div>
                    <div className="top-right-checkout-chlid-2-part-3">
                        <div className="subtotal-shipping">
                            <p>Subtotal</p>
                            <p>$100.00</p>
                        </div>
                        <div className="subtotal-shipping">
                            <p>Shipping</p>
                            <p>Calculated at next step</p>
                        </div>
                    </div>
                    <div className="top-right-checkout-chlid-2-part-4">
                    <div className="total-price">
                            <p>Total</p>
                            <p>$100.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bootom-right-checkout">
                <p>Secure Checkout</p>
                <img src={lock} />
            </div>
        </div>
    </section>
  )
}

export default Checkout