import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../ٍSideBar/SideBar'

export default function MasterLayout() {
  return (
    <div>
     <div style={{ display: "flex" }}>
      <SideBar />
        
        <Outlet /> 
      </div>
    </div>
   
  )
}
