
import Categories from "../reuseable/Categories"
import Delivery from "../reuseable/Delivery"
import Flash from "../reuseable/Flash"
import Hero from "../reuseable/Hero"
import Jbl from "../reuseable/Jbl"
import MonthProd from "../reuseable/MonthProd"
const Home = () => {

  return (

    <div className="body">
      <Hero/>
      <Flash/><hr/>
      <Categories/><hr/>
      <MonthProd/>
      <Jbl/>
      <Flash/>
      <Delivery/>
    </div>
  )
}

export default Home