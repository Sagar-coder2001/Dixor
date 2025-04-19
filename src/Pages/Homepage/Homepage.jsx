import React from 'react'
import Main from '../../Components/Main/Main'
import Service from '../../Components/Service/Service'
import About from '../../Components/About/About'
import Features from '../../Components/Features/Features'
import Price from '../../Components/Price/Price'
import Revenue from '../../Components/Revenue/Revenue'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Blog from '../../Components/Blog/Blog'

const Homepage = () => {
  return (
    <>
   <Main/>
   <Service/>
   <About/>
   <Features/>
   <Price/>
   <Revenue/>
   <Testimonials/>
   <Blog/>
   </>
  )
}

export default Homepage