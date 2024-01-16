import React from 'react'
import Header from '../Component/Header/Header'
import Routers from '../Routers/Routers'
import Footer from '../Component/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </div>
  )
}

export default Layout
