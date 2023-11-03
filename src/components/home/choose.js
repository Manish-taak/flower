import React from 'react'
import choose from '../json/choose.json'
const Choose = () => {
  return (
    <>
      <section>
        <div className="choose">
          <div className="choose-left">
            <h1 className='about-left-h1-text common-h-50 '>
              Why choose us ?
            </h1>
          </div>
          <div className="choose-right">
          {
            choose.map((index, item) => {
              return (
                <div className="choose-right-child" key={item} >
                  <h2 className='common-h-38' >{index["chose-h2"]}</h2>
                  <p className='common-p-16' >{index["choose-p"]}</p>
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