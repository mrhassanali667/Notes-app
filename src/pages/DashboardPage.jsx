import React, { useEffect, useState } from 'react'
import SideBar from '../components/layout/SideBar'
import Dashboard from '../components/layout/Dashboard'

const DashboardPage = () => {


    return (
     <div className='h-full w-full flex'>
        <SideBar/>
        <Dashboard/>
     </div>   
    )
}

export default DashboardPage