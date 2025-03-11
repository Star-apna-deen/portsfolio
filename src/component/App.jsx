import React from 'react'
import Navbar from './component/navbar'
import Home from './component/Home'
import About from './component/About'
import Portsfolio from './component/Portsfolio'
import Experience from './component/experience'
import Footer from './component/Footer'
import Contact from './component/Contact'
import { Toaster } from 'react-hot-toast'



function App() {
  return (
    <>
      <div> <Navbar />
        <Home />
        <About />
        <Portsfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
