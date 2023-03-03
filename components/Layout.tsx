import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children} : {children: any}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout