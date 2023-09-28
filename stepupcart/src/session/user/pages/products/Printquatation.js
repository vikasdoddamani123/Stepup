import React from 'react'
import UserNav from '../../Components/UserNav'
import Print1 from '../../images/Rectangle 50.svg'
import '../../css/Printquatation.css'

function Printquatation() {


  return (
<>
<UserNav/>
<div className='Printcontainer'>
    <div className='Print-pic'>
        <img className='print-pic-1' src={Print1} alt='Rectangle 50.svg'/>
    </div>
    <div className='print-bill'>
        <h1>Quatation 1</h1>
        <table className='tab-1'>
            <tr className='tab-2'>
                <th className='tab-head'>Products</th>
                <th className='tab-head'>Price</th>
                <th className='tab-head'>QTY</th>
                <th className='tab-head'>Sub Total</th>
            </tr>
        </table>
    </div>
</div>
<div className='Print-btn-grp'>
<div className='print-quatation-btn-1'>
        <button type='submit' className='print-btn-1'>Buy Now</button>
    </div>
    <div className='print-quatation-btn-2'>
        <button type='submit' className='print-btn-2'>Print</button>
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

export default Printquatation