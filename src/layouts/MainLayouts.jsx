import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayouts = () => {
  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayouts
