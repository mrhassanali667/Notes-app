import React from 'react'

const SearchBox = () => {
    return (
            <div className='h-[45px] min-w-[400px] max-w-[700px] flex ring-1 ring-gray-400 rounded-[7px]'>
                <span className='w-[45px] flex justify-center items-center'>
                    <svg
                        className="w-6 h-6 text-gray-700 "
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
                            strokeWidth={2}
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </span>
                <input
                    type="search" placeholder='Search'
                    className='w-[90%] text-[1.4em] outline-0 px-2'
                />
            </div>
            
    )
}

export default SearchBox