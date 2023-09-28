import React from 'react'
import '../../css/Getquatation.css'
import UserNav from '../../Components/UserNav'
import Getpic from '../../images/Rectangle 50.svg'
import { Link } from 'react-router-dom'

function Getquatation() {
  return (
<>
<UserNav/>
<div className='Getquatation'>
    <div className='getquation-container'>
    <img className='get-image' src={Getpic} alt='Rectangle 50.svg'/>
    </div>
    <div className='quatation-list-1'>
        <div className='quatation-list-11'>
            <div className='quatation-list-111'>
        <p className='quatation-1'>Quotation 1</p>
        <div className='get-quatation-grp-11'>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        </div>
        <Link to ="/Addcart">
        <button className='add-quatation-1' type='Submit'>Add To Cart</button>
        </Link>
             </div>
             <div className='quatation-list-112'>
        <p className='quatation-1'>Quotation 1</p>
        <div className='get-quatation-grp-11'>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        </div>
        <div className='add-quatation-11'>
        <button className='add-quatation-1' type='Submit'>Add To Cart</button>
        </div>
             </div>
             <div className='quatation-list-113'>
        <p className='quatation-1'>Quotation 1</p>
        <div className='get-quatation-grp-11'>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        <div className='get-quatation-grp'>
        <input type='checkbox' className='quatation-btn-01'/>
        <p className='text-get-quatation'>12mm ₹ 65.05 </p>
        </div>
        </div>
        <button className='add-quatation-1' type='Submit'>Add To Cart</button>
             </div>
        </div>
    </div>
</div>
<div className='get-Footer'>
  <div className='col-11'>
    <p className='about-1'>
      ABOUT 
    </p>
    <p className='about-2'>
      Contact Us<br/>
      About Us<br/>
      Careers
    </p>
  </div>
  <div className='col-12'>
    <p className='about-1'>
      HELP 
    </p>
    <p className='about-2'>
      Payments<br/>
      Shipping<br/>
      FAQ
    </p>
  </div>
  <div className='col-13'>
    <p className='about-1'>
      POLICY 
    </p>
    <p className='about-2'>
      Terms Of Use<br/>
      Security<br/>
      Privacy
    </p>
  </div>
  <div className='col-14'>
    <p className='about-1'>
      SOCIALMEDIA
    </p>
    <p className='about-2'>
      Facebook<br/>
      Instagram<br/>
      Twitter
    </p>
  </div>
</div>
  
</>
  )
}

export default Getquatation