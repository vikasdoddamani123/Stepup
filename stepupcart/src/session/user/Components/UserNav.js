import React from 'react'
import '../css/usernav.css'
import { Link } from 'react-router-dom'
import Pic1 from '../images/Vector 1.svg'
import Pic2 from '../images/Vector 2.svg'
import {BsSearch} from "react-icons/bs"

function UserNav() {
  return (
<>
<div className='usernavv'>
    <div className='logo'>
        <Link to ="/Home" className='link1'>
        <h1>StepUpCart</h1>
        </Link>
    </div>
    <div className='search'>
        <div className='search-grp'>
        <input type='text'
        className='search-text'
        placeholder='Search..'
       />
        <BsSearch className='search-icon'/>
        </div>
    </div>
    <div className='logo-items'>
        Products
    </div>
    <div className='logo-items1'>
        Profile
    </div>
    <div className='logo-img1'>
    <img className='notification' src={Pic2} alt='Vector 2.svg'/>
    </div>
    <div className='logo-img2'>
        <img className='notification' src={Pic1} alt='Vector 1.svg'/>
    </div>
</div>
</>
  )
}

export default UserNav