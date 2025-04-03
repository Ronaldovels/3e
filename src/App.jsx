import './App.css'
import NavBar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Product from './components/product.jsx'
import Mission from './components/mission.jsx'


function App() {

  return (
    <>
          <NavBar/>
          <Hero/>
          <Mission/>
          <Product/>
          <About/>
          <Footer/>
    </>
  )
}

export default App
