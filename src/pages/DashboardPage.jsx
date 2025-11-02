import React, { useEffect, useState } from 'react'
import SideBar from '../components/layout/SideBar'
import Dashboard from '../components/layout/Dashboard'
import AddNote from '../components/layout/AddNote'
import { useSelector } from 'react-redux'

const DashboardPage = () => {

    let isAddNote = useSelector(state => state.addNote.value)
    console.log(isAddNote)

    return (
        <div className='h-full w-full flex'>
            <SideBar />
            <Dashboard />
            {isAddNote && <AddNote />}
        </div>
    )
}

export default DashboardPage