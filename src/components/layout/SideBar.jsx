import React from 'react'

const SideBar = () => {
  return (
    <div className='h-full w-[25%] flex flex-col p-[10px] px-[15px]'>
      <div className='h-[10%] w-full'>
        <h1 className='text-[2.5em] font-semibold'>Notes</h1>
      </div>
      <div className='h-[90%] w-full py-5'>
        <ul className='flex flex-col gap-3'>
          <li className='h-[45px] w-[90%] text-[1.3em] font-semibold rounded-[10px] bg-gray-100 p-2 px-4' >Personal</li>
          <li className='h-[45px] w-[90%] text-[1.3em] font-semibold rounded-[10px] p-2 px-4' >Work</li>
          <li className='h-[45px] w-[90%] text-[1.3em] font-semibold rounded-[10px] p-2 px-4' >Wishlist</li>
          <li className='h-[45px] w-[90%] text-[1.3em] font-semibold rounded-[10px] p-2 px-4' >Important</li>
          <li className='h-[45px] w-[90%] text-[1.3em] font-semibold rounded-[10px] p-2 px-4' >Travel</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar