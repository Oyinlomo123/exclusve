import items from "./items"
import Categ from "./Categ"

const Categories = () => {
  return (
    <div>
      <div>
      <div className='today'>
        <h4 className='h4'>Categories</h4>
        <div className='flashsale'>
          
        <div className='sales'>
          <h1>Browse By Category</h1>
          
          </div>
          <div className='arrow'>
          <i className="ri-arrow-right-line"></i>&nbsp; &nbsp;<i className="ri-arrow-left-line"></i>
          </div>
          
         </div>
         <div className='categ-card'>
          {items.categoryData.map((item,index) => {
            return(
              <Categ img={item.img} title={item.title}  key={index}/>
            )
          }
          )
        }
         </div>
         
      </div>
    </div>
    </div>
  )
}

export default Categories