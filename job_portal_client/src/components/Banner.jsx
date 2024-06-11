import React, { useState } from 'react'
import { FiMap, FiMapPin, FiSearch } from 'react-icons/fi'

const Banner = ({query,handlInputChange}) => {
   
  return (
    <div className="max-w-screen-2x1 container mx-auto x1:px-24 md:py-20 py-14">
    <h1 className="text-5x1 font-bold text-primary mb-3">Find Your <span className='text-blue'>New Job</span> Today</h1>
    <p className="text-1g text-black/70 mb-8">Thousands of Jobs in the computer, Engineering and Technology Sectors are woiting for you.</p>
    <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus -within:ring-indigo-600 md:w-1/2 w-full'>
                <input type="text" name="title" id="title" placeholder="         What position you are Looking for?"className="block flex-1 border-0 bg-transparent py-1.5 p1-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
           onChange={handlInputChange}
           value={query}
           />
           <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus -within:ring-indigo-600 md:w-1/2 w-full'>
                <input type="text" name="title" id="title" placeholder="         Location?"className="block flex-1 border-0 bg-transparent py-1.5 p1-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
        
        
           />
           <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>
             Search
            </button>
        </div>
    </form>
    </div>
  )
}
export default Banner;