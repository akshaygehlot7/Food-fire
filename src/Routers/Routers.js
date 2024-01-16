import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import RestaurantMenu from '../Pages/RestaurantMenu/RestaurantMenu'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="about/profile" element={<Profile />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        </Routes>
    </div>
  )
}

export default Routers
