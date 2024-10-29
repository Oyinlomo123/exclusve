import { Link } from "react-router-dom"


const Nav = ({size}) => {
  return (
    <header>
      <nav className="">
        <h1>EXCLUSIVE</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Sign Up</Link>
        </ul>
        <div className="search">
          <div className="input">
        <input type="search" name="" id="" placeholder="what are you looking for " ></input>
        <i className="ri-search-line"></i>
        </div>
        <span><i className="ri-heart-3-line"></i></span>
        <span className="icon">
          <Link><i className="ri-shopping-cart-2-line"><sup>{size}</sup></i></Link>
        </span> 
        </div>
      </nav>
    </header>
  )
}

export default Nav