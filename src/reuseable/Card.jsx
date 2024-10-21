import gamepad from "../assets/gamepad.PNG"

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" /><br/>
        <i class="ri-heart-line"></i><br/>
        <i class="ri-eye-line"></i>
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
      </div>
    </div>
  )
}

export default Card