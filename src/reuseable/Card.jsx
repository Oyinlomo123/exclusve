import items from "./items"


const Card = (props, handleClick) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" /><br/>
        <i className="ri-heart-line"></i><br/>
        <i className="ri-eye-line"></i>
        <h4>{props.title}</h4>
        <h5>${props.price} <span>${props.discount}</span></h5>
        <h4>
        <i className="ri-star-s-fill"></i>
        <i className="ri-star-s-fill"></i>
        <i className="ri-star-s-fill"></i>
        <i className="ri-star-s-fill"></i>
        <i className="ri-star-s-fill"></i>
        (86)
        </h4>
        <button onClick={()=>handleClick(props)}>add to cart</button>
      </div>
    </div>
  )
}

export default Card