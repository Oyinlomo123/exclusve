import React from 'react'
import Card from './Card'
import items from './items'

const Flash = ({handleClick}) => {
  
  return (
    <div>
      <div className='today'>
        <h4 className='h4'>Today's</h4>
        <div className='flashsale'>
          
        <div className='sales'>
          <h1>Flash Sale's</h1>
          <div className='time'>
            <div >
              <h5>Days</h5>
              <h1>0:3</h1>
            </div>
            <h1>:</h1>
            <div >
                <h5>Days</h5>
                <h1>2:3</h1>
            </div>
            <h1>:</h1>
            
            <div >
                <h5>Days</h5>
                <h1>1:9</h1>
            </div>
            <h1>:</h1>
            <div >
                <h5>Days</h5>
                <h1>5:6</h1>
            </div>
          </div>
          </div>
          <div className='arrow'>
          <i className="ri-arrow-right-line"></i>&nbsp; &nbsp;<i className="ri-arrow-left-line"></i>
          </div>
          <div></div>
         </div>
         <div className='items'>
          {items.productData.map((item,index) => {
            return(
              <Card img={item.img} title={item.title} price={item.price} discount={item.discount} handleClick={handleClick} key={index}/>
            )
          }
          )
        }
         </div>
         <div className='viewall'>
          <button>View All Product</button>
         </div>
      </div>
    </div>
  )
}

export default Flash