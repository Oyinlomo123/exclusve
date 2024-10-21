import up from "../assets/up.png"

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <ul>
          <li>woman's fashion <i className="ri-arrow-right-s-line"></i></li>
          <li>men's fashion <i className="ri-arrow-right-s-line"></i></li>
          <li>electronics</li>
          <li>Home and lifestyle</li>
          <li>medicine</li>
          <li>sports and outdoor</li>
          <li>baby's & toy</li>
          <li>groceries & pets</li>
          <li>health & beauty</li>
        </ul>
        <div className="img">
        <img src={up} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero