import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal, showModal } from '../../redux/addNote/addNoteSlice'

const AddNote = () => {

    let [note, setNote] = useState('')
    let dispatch = useDispatch()

    return (
        <div className='h-full w-full flex justify-center items-center bg-black/40 absolute'>
            <div className=' w-[400px] rounded-[20px] bg-white shadow-[0px_1px_50px_0px] shadow-black/20  py-4'>
                <div className='h-[10%] w-full flex justify-between items-center '>
                    <h1 className='text-[1.7em] font-semibold px-5'>Add Note</h1>
                    <button
                        onClick={() => dispatch(hideModal())}
                        className='h-full w-[35px] flex justify-between items-center cursor-pointer'>
                        <svg
                            className="w-7 h-7 text-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18 17.94 6M18 18 6.06 6"
                            />
                        </svg>
                    </button>

                </div>
                <div className='h-[90%] flex flex-col gap-3 p-5 px-7'>
                    <div className='flex flex-col gap-6'>
                        <input
                            type="text" placeholder='Title'
                            className='h-[40px] text-[1.3em]  w-full ring-1 ring-gray-400 outline-none rounded-[5px] px-3'
                        />


                        <textarea onChange={e => setNote(e.target.value)} placeholder='Description' className='h-[150px] w-ful text-[1.1em] resize-none outline-none ring-1 ring-gray-400 rounded-[5px] py-1 px-2'>

                        </textarea>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="select" className='text-[1.3em]'>Folder</label>
                        <div className='h-[35px] w-full flex items-center ring-1 ring-gray-400 rounded-[5px] px-2'>
                            <select id='select' className='h-full w-full text-[1.2em] outline-none   '>
                                <option value="">Select Folder</option>
                                <option value="">wolrd</option>
                                <option value="">KJIUYrh</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center mt-5'>
                        <button
                            className='h-[40px] w-[100px] text-[1.3em] font-semibold rounded-[10px] cursor-pointer'
                        >Cancel</button>
                        <input
                            type="submit" value="Save"
                            className='h-[40px] w-[100px] text-[1.3em] rounded-[10px] text-white font-semibold bg-neutral-700 cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNote