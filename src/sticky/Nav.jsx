import { Link } from "react-router-dom"
import Home from "../component/Home"

const Nav = () => {
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
        <i className="ri-heart-3-line"></i>
        <i className="ri-shopping-cart-2-line"></i>
        </div>
      </nav>
    </header>
  )
}

export default Nav