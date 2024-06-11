import React from 'react'
import Inputfield from '../components/Inputfield'
const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

    <div>
      <label className="sidebar-lable-container">
        <input type='radio' name='text' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any Type
      </label>

      <div><Inputfield handleChange={handleChange} value="Part-time" title="Part-time" name="test"/></div>
      <div><Inputfield handleChange={handleChange} value="Full-time" title="Full-time" name="test"/></div>
      <div><Inputfield handleChange={handleChange} value="Temporary" title="Temporary" name="test"/></div>
      
      
    </div>
  </div>
  )
}

export default EmploymentType