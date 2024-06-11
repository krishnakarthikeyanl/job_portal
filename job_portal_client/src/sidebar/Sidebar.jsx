import React from 'react'
import Location from './Location'
import WorkExep from './WorkExep'
import EmploymentType from './EmploymentType'
const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
    <h3 className='text-lg font-bold mb-2'>Filter</h3>

    <Location handleChange={handleChange}/>
     
    
     <WorkExep handleChange={handleChange}/>
     <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar