import Category from "../reuseable/category"
import Flash from "../reuseable/Flash"
import Hero from "../reuseable/hero"
import Jbl from "../reuseable/Jbl"
import MonthProd from "../reuseable/MonthProd"
const Home = () => {
  return (
    <div>
      <Hero/>
      <Flash/><hr/>
      <Category/><hr/>
      <MonthProd/>
      <Jbl/>
    </div>
  )
}

export default Home