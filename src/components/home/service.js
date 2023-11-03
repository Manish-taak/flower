import React from 'react'
import service from '../image/service-image-left.png'
const Service = () => {
  return (
    <>
      <section>
          <h2 className='service common-h-50 ' >Our Service</h2>
        <div className="service-buttom-text-image">
          <div className="service-image">
            <img src={service} />
          </div>
          <div className="service-right-text">
            <p className='service-p-1 common-p-14 ' >service</p>
            <h2 className='service-h2-text common-h-50 '>Flower Subcriptions</h2>
            <p className='service-p-2 common-p-18 ' >Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
            <button className='service-btn btn-white ' >Subscribe Now</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Service