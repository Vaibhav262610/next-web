import React from 'react'

const Hero = ({heading , message}) => {
  return (
    <div className='flex items-center justify-center h-screen custom-img bg-cover bg-fixed'>
        <div className='bg-black/70  absolute z-[2] top-0 left-0 right-0 bottom-0  ' />
        <div className='p-5 z-[2]   text-white '>
            <h1 className='text-5xl font-bold'>{heading}</h1>
            <p className='text-xl py-5'>{message}</p>
            <button className='px-8 py-2 border hover:bg-white hover:text-black'>View More</button>
        </div>
    </div>
  )
}

export default Hero