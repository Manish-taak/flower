import React from 'react'
import Banner from '../home/banner.js'
import About from '../home/about.js'
import Choose from '../home/choose.js'
import Clients from '../home/clients.js'
import Service from '../home/service.js'
import Contact from '../home/contact.js'

const Home = () => {
  return (
   <main>
     
        <Banner/>
        <About/>
        <Choose/>
        <Clients/>
        <Service/>
        <Contact/>
    
   </main>
  )
}

export default Home