import React from 'react'
import Inputfield from '../components/Inputfield'
const WorkExep = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

    <div>
      <label className="sidebar-lable-container">
        <input type='radio' name='text' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any experience
      </label>

      <div><Inputfield handleChange={handleChange} value="Internship" title="Internship" name="test"/></div>
      <div><Inputfield handleChange={handleChange} value="Work remotely" title="Work Remotely" name="test"/></div>
      <div><Inputfield handleChange={handleChange} value="Freshers" title="Freshers" name="test"/></div>
      
      
    </div>
  </div>
  )
}

export default WorkExep