import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayouts = () => {
  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayouts
