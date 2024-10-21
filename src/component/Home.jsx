import Categories from "../reuseable/Categories"
import Flash from "../reuseable/Flash"
import Hero from "../reuseable/hero"
import Jbl from "../reuseable/Jbl"
import MonthProd from "../reuseable/MonthProd"
const Home = () => {
  return (
    <div>
      <Hero/>
      <Flash/><hr/>
      <Categories/><hr/>
      <MonthProd/>
      <Jbl/>
    </div>
  )
}

export default Home