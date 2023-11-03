import React from 'react'
import category from '../json/category.json'
import categloryimage from '../image/category\ image.png'
const Category = () => {
  return (
    <>
      <section className="category-section">
        <div className="category-left">
          <h1>Fresh Flowers</h1>
        </div>
        <div className="category-right">
          {
            category.map((index, item) => {
              return (
                <div className="flower-map-category" key={item} >
                  <img src={categloryimage} />
                  <div className='category-set-image-text' >
                    <h3 className='category-h3-text common-p-16 ' >{index["h3-text"]}</h3>
                    <p className='category-p-text' >{index['price']}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Category