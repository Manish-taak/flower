import React from 'react'
// import Ban from '../home/ban.js'
import Banner from '../home/banner.js'
import About from '../home/about.js'
import Choose from '../home/choose.js'
import Clients from '../home/clients.js'
import Service from '../home/service.js'
import Contact from '../home/contact.js'
import Attachment from '../home/attachment.js'

const Home = () => {
  return (
   <main>
    {/* <Ban/> */}
        <Banner/>
        <About/>
        <Choose/>
        <Contact/>
        <Service/>
        <Attachment/>
        <Clients/>
   </main>
  )
}

export default Home