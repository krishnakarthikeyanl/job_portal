import React from 'react'
import Button from './Button'
import Location from './Location'
import Inputfield from '../components/Inputfield'
     const Salary = ({ handleChange, handleClick}) => {
  return (
    <div>
        <h3 className='text-lg font-medium mb-2'>Salary</h3>
        <div className='mb-4'>
        <Button onClickHandler={handleClick} value="Hourly" title="Hour"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        </div>
        <div>
        <lable className="sidebar-lable-container">
            <input type='radio' name='text' id='test' value="" onChange={handleChange}/>
            <span className="checkmark"></span>ALL
        </lable>
        <div>
        <Inputfield handleChange={handleChange} value={30} title=" <30000k" name="test2"/>
        </div>
        <div>
          <Inputfield handleChange={handleChange} value={50} title=" <50000k" name="test2"/>
        </div>
        <div>
          <Inputfield handleChange={handleChange} value={80} title=" <80000k" name="test2"/>
        </div>
        <div>
          <Inputfield handleChange={handleChange} value={100} title=" <100000k" name="test2"/>
        </div>
        
    </div>
    </div>
  )
}

