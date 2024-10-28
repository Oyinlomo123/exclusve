import items from "./items"
import Card from "./Card"
const MonthProd = ({handleClick}) => {
  return (
    <div>
      <div className='today'>
        <h4 className='h4'>Categories</h4>
        <div className='flashsale'>
          
          <div className='sales'>
            <h1>Browse By Category</h1>
          </div>
          <div className='btn'>
            <button>view all</button>
          </div>
          
         </div>
         <div className='items mth'>
          {
          items.monthData.map((item,index) => {
            return(
              <Card img={item.img} title={item.title} price={item.price} discount={item.discount} handleClick={handleClick} key={index}/>
            )
          }
          )
        }
         </div>
         
      </div>
      
    </div>
  )
}

export default MonthProd