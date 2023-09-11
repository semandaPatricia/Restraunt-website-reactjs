import React from 'react'


import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'
import HeadlineCards from './components/HeadlineCards'

function App() {
  

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <Navbar/>
      <HeroSection/>
      <HeadlineCards/>
      <Footer/>
    </div>
  )
}

export default App
