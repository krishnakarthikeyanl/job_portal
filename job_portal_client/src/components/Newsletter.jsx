import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa'
const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText/>
            E-mail me for Jobs</h3>
             <p className='text-primary/75 text-base mb-4'>hello</p>
             <div className='w-full space-y-4' >
                <input type="email" name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 p1-3 border focus:outline-none'/>
                <input type="submit" value={"subcribe"} className='w-full block py-2 p1-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />

             </div>
        </div>
        <div className='mt-20'>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaRocket/>
            Upload Resume</h3>
             <p className='text-primary/75 text-base mb-4'>hello</p>
             <div className='w-full space-y-4' >
              
                <input type="submit" value={"Upload Your Resume"} className='w-full block py-2 p1-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />

             </div>
        </div>
    </div>
    
    
  )
}

export default Newsletter