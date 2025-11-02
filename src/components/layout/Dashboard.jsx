import React, { useEffect, useState } from 'react'
import SearchBox from '../specific/SearchBox'
import { useDispatch } from 'react-redux'
import { showModal } from '../../redux/addNote/addNoteSlice'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Dashboard = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            let data = await axios.get("http://192.168.100.22:3001/notes")
            return data.data.data
        } catch (error) {
            console.error(error.code)
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['notes'],
        queryFn: fetchData
    })

    return (
        <div className='h-full w-[75%] flex flex-col '>

            <div className='h-[10%] w-full flex justify-between items-center  py-3 px-10 '>
                <SearchBox />
                <button
                    onClick={() => dispatch(showModal())}
                    className='h-[45px] font-semibold cursor-pointer flex justify-center items-center py-2 px-4 text-[1.2em] shadow-[0px_1px_3px_0px] shadow-black/90 rounded-[7px]'>Add Note</button>
            </div>
            <div className='h-[90%] w-full flex gap-10 flex-wrap  overflow-y-scroll p-5'>

                {(!isLoading) ?
                    data?.map(note =>
                        <div className='h-[200px]  overflow-y-auto w-[350px] p-[15px] rounded-[10px] shadow-[0px_1px_5px_0px] shadow-black/40 flex flex-col gap-3' >
                            <h1 className='text-[1.9em] font-semibold'>{note?.title}</h1>
                            <p className='text-[1.3em] '>{note?.content}</p>
                        </div>
                    ) :

                    <div className='h-[90%] w-full flex justify-center items-center'>
                        <div className="flex items-center justify-center">
                            <div
                                className="h-15 w-15 animate-spin  rounded-full border-4 border-gray-00 border-t-transparent"
                            />
                        </div>
                    </div >
                }
            </div>
        </div >
    )
}

export default Dashboard