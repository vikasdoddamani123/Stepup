import React, { useState } from 'react'
import '../../css/Quatation.css';
import Usernavv from '../../Components/UserNav'
import Product1 from '../../images/Rectangle 50.svg'
import Product2 from '../../images/Rectangle 52 (1).svg'
import Product3 from '../../images/Rectangle 52 (2).svg'
import Product4 from '../../images/Rectangle 53.svg'
import Product5 from '../../images/Rectangle 52.svg'
import {FaStar} from "react-icons/fa";

const colors = {
  orange : "orange",
  grey : "a9a9a9"
}


function Quatationpage() {

 const stars = Array(5).fill(0);
 const [currentValue, setCurrentValue] = useState(0);
 const [hoverValue, setHoverValue] = useState(undefined);
//  const [currentValue, setCurrentValue] = useState(0);


const handleClick = value => {
  setCurrentValue(value)
};

const handleMouseOver = value =>{
  setHoverValue(value)
};

const handleMouseLeave = () => {
  setHoverValue(undefined)
}


  return (
<>
<Usernavv/>
<div className='quatation'>
  <div className='product-1'>
    <div className='product-01'>
    <img className='product-11' src={Product1} alt='Rectangle 50.svg'/>
    </div>
    <div className='sub-products'>
      <img className='product-12' src={Product2} alt='Rectangle 52 (1).svg'/>
      <img className='product-12' src={Product3} alt='Rectangle 52 (2).svg'/>
      <img className='product-12' src={Product4} alt='Rectangle 53.svg'/>
      <img className='product-12' src={Product5} alt='Rectangle 52.svg'/>
    </div>
    <div className='quatation-text'>
      <p className='title'>TATA steel bar</p><br/>
      <p className='title-1'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm</p><br/>
      <div className='title-2-3'>
      <p className='title-2'>Availability: </p><p className='title-3'>In stock</p>
      </div><br/>
      <p className='title-4'>Brand Name</p><br/>
      <p className='title-5'>Maximum Order Quantity : 10 tons</p>
    </div>
    <div className='quatation-btn'>
      <button className='quatation-btn-1' type='submit'>Get Quatation</button>
    </div>
  </div>
  <div className='delivery-text'>
    <div className='delivery-text-1'>
      <p className='delivery-text-11'>
      Delivery Information
      </p>
      <p className='delivery-text-12 '>Usually delivers in 2 to 3 working days</p>
    </div>
  </div>
  <br/>
  <div className='payments'>
    <p className='payment-head'>Payments</p>
    <ul>
      <li className='options'>
        Cash On Delivery
      </li>
      <li className='options'>
        Razorpay
      </li>
    </ul>
  </div>
  <br/>
  <div className='product-description'>
    <p className='product-head'>Product description</p>
    <p className='product-head-1 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
  </div><br/> <br/>
  <div className='Rating'>
    <p className='Rating-1'>
      Rating&Reviews
    </p>
    <div className='Rating-btn-grp'>
    <button className='Rating-btn' type='submit'>Rate Product</button>
    </div>
  
  </div>
  <div className='stars'>
      {stars.map((_, index) => {
        return(
          <FaStar 
          key={index}
          size={34}
          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
          />
        )
      })}
    </div>
    <br/>
    <div className='Feedback'>
      <div className='feedback-1'>
        <p className='feedback-11'>4.5 <FaStar className='feedback-star'/> Good Product</p><br/>
        <p className='feedback-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ..</p>
      </div><br/> <br/>
      <div className='feedback-1'>
        <p className='feedback-11'>4 <FaStar className='feedback-star'/> Delivered at right time</p><br/>
        <p className='feedback-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ..</p>
      </div>
    </div>
  <br/><br/>
<div className='Quatation-similar'>
    <div className='similar-head'>
      <h3>Similar Products</h3>
    </div>
    <div className='similar-product'>
      <div className='similar-pdt'>
    <img className='similar' src={Product1} alt='Rectangle 50.svg'/>
    <p className='similar-title'>TATA steel bar</p>
    <p className='similar-title-1'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm,12mm,16mm,20mm,25mm</p>
    </div>
    <div className='similar-pdt'>
    <img className='similar' src={Product1} alt='Rectangle 50.svg'/>
    <p className='similar-title'>TATA steel bar</p>
    <p className='similar-title-1'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm,12mm,16mm,20mm,25mm</p>
    </div>
    <div className='similar-pdt'>
    <img className='similar' src={Product1} alt='Rectangle 50.svg'/>
    <p className='similar-title'>TATA steel bar</p>
    <p className='similar-title-1'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm,12mm,16mm,20mm,25mm</p>
    </div>
    <div className='similar-pdt'>
    <img className='similar' src={Product1} alt='Rectangle 50.svg'/>
    <p className='similar-title'>TATA steel bar</p>
    <p className='similar-title-1'>TATA steel TATA TISCON TMT BARS FE500D: 8mm, 10mm,12mm,16mm,20mm,25mm</p>
    </div>
    </div>
</div>
<div className='Footer'>
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
  

</div>




</>
  )
}

export default Quatationpage