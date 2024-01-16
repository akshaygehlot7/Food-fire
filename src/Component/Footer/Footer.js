import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-100 ">
    Created By
    <i class="fa-solid fa-heart"></i>
    <Link to="https://www.linkedin.com/in/akshay-gehlot-a117a3234/" target="_blank">
      Akshay Gehlot
    </Link>
    <i class="fa-solid fa-copyright"></i>2023
    <strong>
      Food<span>Villa</span>
    </strong>
  </div>
  )
}

export default Footer
