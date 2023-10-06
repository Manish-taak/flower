import React from 'react'
import service from '../image/service-image-left.png'
const Service = () => {
  return (
    <>
      <section>
        <div className="service">
          <h2>Our Service</h2>
        </div>
        <div className="service-buttom-text-image">
          <div className="service-image">
            <img src={service} />
          </div>
          <div className="service-right-text">
            <p className='service-p-1' >service</p>
            <h2 className='service-h2-text'>Flower Subcriptions</h2>
            <p className='service-p-2' >Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
            <button className='btn-about service-btn' >Subscribe Now</button>
          </div>
        </div>
       
      </section>

    </>
  )
}

export default Service