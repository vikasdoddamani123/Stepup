import React, { useState } from 'react'
import '../../css/Addcart.css'
import UserNav from '../../Components/UserNav'
import Addpic from '../../images/Rectangle 50.svg'
import { Link } from 'react-router-dom'

function Addcart() {

    const [quantity,setQuantity] = useState(1)


    const handleDecrement   =   ()  =>  {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement   =   ()  =>  {
        if(quantity < 10){
            setQuantity(prevCount => prevCount + 1);
        }
    }



  return (
<>
<UserNav/>
<div className='Addcart-conatiner'>
    <div className='Addcart-image'>
        <img className='Addcart-image-1' src={Addpic} alt='Rectangle 50.svg'/>
    </div>
    <div className='Addcart-text'>
        <p className='Addcart-text-1'>TATA steel bar</p>
        <p className='Addcart-text-2'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm</p>
        <p className='Addcart-text-3'>Availability:<p className='Addcart-text-4'>In stock</p> </p>
        <p className='Addcart-5'>QTY :</p>
        <div className='qty-cart'>
            <div className='qty-add'>
        <input type='checkbox' />
        <p className='Addcart-6'>15 mm</p>
        <div className='qty-btn'>
        <button type='button' onClick={handleDecrement} className='Minus-btn'>-</button>
        <div className='text-center'>{quantity}</div>
        <button type='button' onClick={handleIncrement} className='Minus-btn'>+</button>
        </div>
            </div>
            <div className='qty-add'>
        <input type='checkbox' />
        <p className='Addcart-6'>15 mm</p>
        <div className='qty-btn'>
        <button type='button' onClick={handleDecrement} className='Minus-btn'>-</button>
        <div className='text-center'>{quantity}</div>
        <button type='button' onClick={handleIncrement} className='Minus-btn'>+</button>
        </div>
            </div>

        </div>
        <p className='per-piece'>₹ 8.50 per piece</p>
        <p className='estimate'>Estimation cost : ₹ 9999 </p>
        <br/>
        <div className='cart-btn-grp'>
        <div className='cart-btn-grp-1'>
            <button className='buynow-1' type=' submit'>Buy Now</button>
            </div>
            <div className='cart-btn-grp-2'>
            <button className='buynow-2' type=' submit'>Add Cart</button>
            </div>
        </div>
    </div>
    <div className='Addcart-image'>
        <img className='Addcart-image-1' src={Addpic} alt='Rectangle 50.svg'/>
    </div>
    <div className='Addcart-text'>
        <p className='Addcart-text-1'>TATA steel bar</p>
        <p className='Addcart-text-2'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm</p>
        <p className='Addcart-text-3'>Availability:<p className='Addcart-text-4'>In stock</p> </p>
        <p className='Addcart-5'>QTY :</p>
        <div className='qty-cart'>
            <div className='qty-add'>
        <input type='checkbox' />
        <p className='Addcart-6'>15 mm</p>
        <div className='qty-btn'>
        <button type='button' onClick={handleDecrement} className='Minus-btn'>-</button>
        <div className='text-center'>{quantity}</div>
        <button type='button' onClick={handleIncrement} className='Minus-btn'>+</button>
        </div>
            </div>
            <div className='qty-add'>
        <input type='checkbox' />
        <p className='Addcart-6'>15 mm</p>
        <div className='qty-btn'>
        <button type='button' onClick={handleDecrement} className='Minus-btn'>-</button>
        <div className='text-center'>{quantity}</div>
        <button type='button' onClick={handleIncrement} className='Minus-btn'>+</button>
        </div>
            </div>

        </div>
        <p className='per-piece'>₹ 8.50 per piece</p>
        <p className='estimate'>Estimation cost : ₹ 9999 </p>
        <br/>
        <div className='cart-btn-grp'>
        <div className='cart-btn-grp-1'>
            <Link to = "/Printquatation">
            <button className='buynow-1' type=' submit'>Buy Now</button>
            </Link>
            </div>
            <div className='cart-btn-grp-2'>
            <button className='buynow-2' type=' submit'>Add Cart</button>
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

export default Addcart
