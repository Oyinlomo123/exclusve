import  { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./component/Home"
import Nav from "./sticky/Nav"
import Footer from "./sticky/Footer"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
