import React from 'react'
import Navbar from './Navbar'
import WebDevelopmentVideoSection from './WebDevelopmentVideoSection'
import { NavLink } from 'react-router-dom'

const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#275d60] py-3'>
    <button><NavLink to={'/categories'} className="text-2xl mx-4 mb-8 px-8 rounded-md mt-2 bg-white text-[#275d60]">&#8592;</NavLink></button>
    </div>
      <WebDevelopmentVideoSection />
    </div>
  )
}

export default WebDevelopment
