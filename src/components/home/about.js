import React from 'react'

const About = () => {
  return (
      <>
      <div className="about">
        <div className="about-left">
          <h1 className='about-left-h1-text'>
          About us
          </h1>
        </div>
        <div className="about-right">
          <div className="about-right-top">
            <p>our story</p>
            <h2 className='about-right-top-h2-text-1' >Kyiv LuxeBouquets</h2>
            <p className='about-right-top-p-text-1'>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
          </div>
          <button className='btn-about' >Lern more</button>
        </div>
      </div>
      </>
  )
}

export default About