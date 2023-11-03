import React from 'react'
import vector from '../image/Vector.png'
import Rectangle from '../image/Rectangle 69.png'
import lock from '../image/lock_FILL0_wght300_GRAD0_opsz24.png'
import chech from '../image/check_FILL0_wght300_GRAD0_opsz24.png'
import edit from '../image/edit_square.png'
import apple from '../image/Apple.png'
import google from '../image/Google.png' 
const Payment = () => {
    return (
        <section className='checkout'>
            <div className="checkout-left">
                <div className="checkout-left-part-1">
                    <a className='checkout-left-part-1-anchor' href=""> INFRONMATION  <img src={vector} /> </a>
                    <a className='checkout-left-part-1-anchor' href="">SHIPPING <img src={vector} />  </a>
                    <a className='checkout-left-part-1-anchor' href="">PAYMENT <img src={vector} />  </a>
                </div>
                <div className="shipping-contect-imformation">
                    <div className="ok-arrow">
                        <img src={chech} />
                        <p>Contact information</p>
                    </div>
                    <img src={edit} />
                </div>
                <div className="shipping-contect-imformation">
                    <div className="ok-arrow">
                        <img src={chech} />
                        <p>Shipping details</p>
                    </div>
                    <img src={edit} />
                </div>
                <div className="checkout-left-part-2">
                    <div className="dorpdown-open-contact-imformation">
                        <h2>3 Payment</h2>
                        <p>Pay by card. Your payment is secure.</p>
                        <div className="inputs-open-dropdown">
                            <input className='dropdown-1-input  ' type="text" placeholder='Card Number' />
                            <div className="dobble-inputs">
                                <input className='dobble-input-1 ' type="text" placeholder='MM / YY' />
                                <input className='dobble-input-1' type="text" placeholder='CVV Code' />
                            </div>
                        </div>
                        <button className='shipping-bnt btn-black' >CONTINE TO PAYMENT </button>
                        <div className="applepay-google-pay">
                            <p></p>
                            <div className="btn-pay-apple-google">
                                <button className=' btn-pay-google-apple btn-white' > <img src={apple} /> APPLE PAY </button>
                                <button className=' btn-pay-google-apple btn-white' > <img src={google} /> GOOGLE PAY</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="checkout-right">
                <div className="top-right-checkout">
                    <div className="top-right-checkout-chlid-1">
                        <p>Order summary</p>
                    </div>
                    <div className="top-right-checkout-chlid-2">
                        <div className="top-right-checkout-chlid-2-part-1">
                            <img src={Rectangle} />
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
                                <input className='input-apply' placeholder='Gift card' type="text" />
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

export default Payment