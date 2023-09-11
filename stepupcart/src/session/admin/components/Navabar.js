import React from "react";
import '../css/Navbar.css';


function Navbar(){

    const options = [
        {lable:""},
        {lable:"Profile1"},
        {lable:"Profile2"},
        {lable:"Profile3"},
        
    ]
    return(
<>
<div className="header">
    <h1>StepUpCart</h1>
    <div className='Dropdown'>
    <div className='Dropdown1'>
        <h4>Profile</h4>
        <select className='Dropdown2'>
            {options.map(option => (
                <option value={option.value}>{option.lable}</option>
            ))}
        </select>
    </div>
</div>
</div>

</>


    )
}
export default Navbar