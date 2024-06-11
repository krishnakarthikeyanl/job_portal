import React from 'react'
import Inputfield from '../components/Inputfield'
const JobPostingData = ({handleChange}) => {
   const now=new Date();
   const TwentyFourHoursAgo=new Date(now - 24 *60 *60 *1000);
   const SeveralAgo=new Date(now - 7 *60 *60 *1000);
   const ThirtyDaysAgo=new Date(now - 30 *60 *60 *1000);

  const  TwentyFourHoursAgoDate=TwentyFourHoursAgo.toISOString().slice(0,10);
  const  SeveralAgoDte=SeveralAgo.toISOString().slice(0,10);
  const  ThirtyDaysAgoDate=ThirtyDaysAgo.toISOString().slice(0,10);
   

    return(
  <div>
  <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
  <div>
    <lable className="sidebar-lable-container">
        <input type='radio' name='text' id='test' value="" onChange={handleChange}/>
        <span className='checkmark'></span>  All Time
    </lable>

    <div><Inputfield handleChange={handleChange} value="TwentyFourHoursAgoDate" title="  Last 24 Hours Aago" name="test"/></div>
    <div><Inputfield handleChange={handleChange} value="SeveralAgoDte" title="  Last 7 Days" name="test"/></div>
    <div><Inputfield handleChange={handleChange} value="ThirtyDaysAgoDate" title="  Last Month" name="test"/></div>
  
   
    
  </div>
</div>
)
}

export default JobPostingData