import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContextPovider from './context/Home-context';

const App = () => {
  return (
    <HomeContextPovider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </HomeContextPovider>
  )
}

export default App
