import React from 'react'

const Inputfield = ({handleChange,value,title,name}) => {
  return (
    <label className="sidebar-lable-container">
    <input 
    type="radio"
    name={name}  
    value={value} 
    onChange={handleChange}/>
    <span className="checkmark"></span>{title}
</label>
  )
}

export default Inputfield