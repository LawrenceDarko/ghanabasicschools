import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-28 bg-red-600 w-[100%] bg-gradient-to-b from-red-500 via-red-700 to-red-800'>
          <div className='relative flex items-center justify-center w-full h-full p-6'>
              <div className='absolute p-1 transition border-0 h-[59px] w-[218px] overflow-hidden hover:opacity-70 left-[10%]'>
                <img src='logo.png' className='object-contain w-full h-full'/>
              </div>
          </div>
        </div>
        <div className='h-10 bg-gray-100 w-[100%]'></div>
    </div>
  )
}

export default Header