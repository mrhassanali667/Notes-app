import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    let [notes, setNotes] = useState([])

    let fetchData = async () => {
        let data = await fetch("http://192.168.100.22:3001/notes").then(res => res.json())
        setNotes(data.data)
        console.log(notes)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (notes.length < 1) {
        return <div>
            
        </div>
    }


    return (
        <div className='h-full w-[70%] flex gap-10 flex-wrap justify-center p-5 '>
            {notes?.map(note =>
                <div className='max-h-[340px] overflow-y-auto w-[350px] p-[15px] flex flex-col gap-3  border-2' >
                    <h1 className='text-[1.9em] font-semibold'>{note?.title}</h1>
                    <p className='text-[1.3em]'>{note?.content}</p>
                </div>
            )
            }
        </div >
    )
}

export default Dashboard