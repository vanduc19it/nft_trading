import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Space_Grotesk} from 'next/font/google'


const space_grotesk = Space_Grotesk({ subsets: ['latin'] });


function Layout({children} : {children: any}) {

  return (
    <div className={space_grotesk.className}>
     
        {/* <Navbar /> */}
        {children}
        <Footer/>
    </div>
  )
}

export default Layout