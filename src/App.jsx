import React from 'react'


import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'
import HeadlineCards from './components/HeadlineCards'
import Foods from './components/Foods'
//import SearchFilter from './components/SearchFilter'

function App() {
  

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <Navbar/>



      
      <HeadlineCards/>
      <Foods/>
      <Footer/>
    </div>
  )
}

export default App
