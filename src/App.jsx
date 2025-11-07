import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import OrderOnline from './pages/OrderOnline'

export default function App(){
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/order-online' element={<OrderOnline/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
