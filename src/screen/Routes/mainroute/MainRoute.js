import React from 'react'
import Sidebar from '../../pages/component/sidebar/Sidebar'
// import Header from '../../pages/component/header/Header'
import { Outlet } from 'react-router-dom'

const MainRoute = () => {
  return (
    <div className='flex'>
        <Sidebar  />
        <Outlet/>
      </div>
    
    
  )
}

export default MainRoute
