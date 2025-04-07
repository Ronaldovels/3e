import NavBar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Hero from '../components/hero.jsx'
import About from '../components/steps.jsx'
import Product from '../components/product.jsx'
import Mission from '../components/stats.jsx'
import Wcu from '../components/wcu.jsx'


export default function Home() {

  return (
    <>
          <NavBar/>
          <Hero/>
          <Mission/>
          <Product/>
          <Wcu/>
          <About/>
          <Footer/>
    </>
  )
}


