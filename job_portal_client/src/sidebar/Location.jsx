import React from 'react'
import Inputfield from '../components/Inputfield';

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className="sidebar-lable-container">
          <input type='radio' name='text' id='test' value="" onChange={handleChange}/>
            <span className='checkmark'></span>ALL
        </label>

        <div><Inputfield handleChange={handleChange} value="london" title="London" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="Boston" title="Boston" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="Seattle" title="Seattle" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="San Francisco" title="San Francisco" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="Brussels" title="Brussels" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="coimbatore" title="Coimbatore" name="test"/></div>
        <div><Inputfield handleChange={handleChange} value="Chennai" title="Chennai" name="test"/></div>
        
      </div>
    </div>
  )
}

export default Location;