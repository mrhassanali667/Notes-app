import React, { useEffect } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router'
import DashboardPage from './pages/DashboardPage'
import SideBar from './components/layout/SideBar'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element : <Dashboard/>
  //   }
  // ])

  return (
    <>
      <div className='h-screen w-screen overflow-y-auto flex '>
        <DashboardPage />
      </div>
    </>
  )
}

export default App