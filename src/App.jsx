import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Sobre' element={<About/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/Contato' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
