import React from 'react'
import cartimage1 from '../image/cart-image-1.png'

const Cart = ({ opencart }) => {
  return (
    <section className={opencart ? "cart1 opencart " : "cart1"}>
      <div className="cart-box-1"></div>
      <div className="cart-box-2">
        <div className="cart-1">
          <div className="cart-image-left-side">
            <img src={cartimage1} alt="cartimage" />
          </div>
          <div className="cart-image-text-right-side">
            <div className="details">
              <h3 className='common-p-18' >Rosy Delight</h3>
              <p className='common-p-16' >Quantity (1)</p>
              <p className='common-p-18' >$100</p>
            </div>
            <div className="Remove-cart-product">
              <h2 className='common-p-16' style={{ color: "#808080" }} >Remove</h2>
            </div>
          </div>
        </div>
        <div className="cart-2">
          <p className='common-p-18' >Subtotal</p>
          <h3 className='common-p-18' style={{ fontSize: "21px" }} >$100.00</h3>
        </div>
        <div className="cart-3">
          <textarea className='textarea' placeholder="Gift Message" >
            
            </textarea>
        </div>
        <div className="cart-4">
          <p>Shipping & taxes calculated at checkout
            Free standard shipping within Kyiv</p>
        </div>
        <button className='cart-btn btn-black' >CHECK OUT</button>
      </div>
    </section>
  )
}

export default Cart