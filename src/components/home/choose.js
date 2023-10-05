import React from 'react'
import choose from '../json/choose.json'
const Choose = () => {
  return (

    <>
      <section>
        <div className="choose">
          <div className="choose-left">
            <h1 className='about-left-h1-text '>
              Why choose us ?
            </h1>
          </div>
          <div className="choose-right">
          {
            choose.map((index, item) => {
              return (
                <div className="choose-right-child">
                  <h2>{index["chose-h2"]}</h2>
                  <p>{index["choose-p"]}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>
    </>
  )
}

export default Choose