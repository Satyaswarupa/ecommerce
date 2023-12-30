import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    // <>
    // <Nav />
    // <Home />
    // </>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
