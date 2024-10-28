import  { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./component/Home"
import Nav from "./sticky/Nav"
import list from "./reuseable/items"
import React, { useState } from "react"
import Footer from "./sticky/Footer"
import Cart from "./component/Cart"

function App() {
  const [show, setShow] = useState (true)
  const [cart, setCart] = useState ([])

  const handleClick = (item)=> {
      console.log(item);
  }

  return (
    <React.Fragment>
      <Nav size={cart.length}/>
      <Routes>
        <Route path="/" element={<Home />} handleClick={handleClick}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
