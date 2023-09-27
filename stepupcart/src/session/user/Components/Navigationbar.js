
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navv.css'

function Navigationbar() {
  return (
  <>
          <nav className="Navv">
           
            <div className='navv1'>
            <Link to ="/indexpage" className='navv11'>
            <h1>StepUpCart</h1>
            </Link>
            </div>
            <div className='header2'>
            <Link to ="" className='navv11'> About </Link> 
            </div>
            <div>
            <Link to ="" className='navv11'> Services </Link> 
            </div>
            <div>
            <Link to ="" className='navv11'> Products </Link> 
            </div>
           
            <div className='btn-grp'>
                <Link to ="/userLogin">
              <button className='btnn1' 
              type='submit' 
            > Login </button>
            </Link>
            
    <button type='clear' className='button-11'>Get Started</button>
            <div className='div2'></div>
            </div>
        </nav>
  </>
  )
}

export default Navigationbar