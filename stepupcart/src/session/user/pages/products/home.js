import React from 'react'
import Usernavv from '../../Components/UserNav';
import Homebanner from '../../images/unsplash_3pBHB-bmGno.svg';
import Homebanner1 from '../../images/shopping_eccommece_home.svg';
import '../../css/home.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Recent from '../../images/Rectangle 47.svg';
import Plumbing1 from '../../images/Rectangle 47 3.svg'
import Plumbing2 from '../../images/Rectangle 47 (2).svg'
import Plumbing3 from '../../images/Rectangle 47 (1).svg'
import Spindle from '../../images/Rectangle 48 (1).svg'
import Tap from '../../images/Rectangle 48.svg'
import Adhessive from '../../images/Rectangle 36.svg'
import { Link } from 'react-router-dom';


const Home= () => {

  return (
<>
<Usernavv/>
<div className='Bannerslide'>
  <Slide>
<div className='home-banner'>
  
            <img src={Homebanner} alt='unsplash_3pBHB-bmGno.svg' />
            <img className='sub_banner' src={Homebanner1} alt='shopping_eccommece_home.svg' />
            <p className='banner_text'>Worried about<br/>
                  Materials</p>
            <p className='banner_text_1'>Worried about materials <br/>
              price by different sellers  ?</p>
            <button className='Home_btn1' type='submit'>Know More</button>
</div>
 </Slide>
</div>

<div className='slideshow'>
  <div className='slide_head'>
    <h3>Based On Recent Search</h3>
  </div>
            <Slide slidesToScroll={4} slidesToShow={4} indicators={true} >
              <div className='Recent1'>
                <Link to= '/Quatation'>
              <img className='Recent' src={Recent} alt='Rectangle 47.svg'/>
              <p className='text'>PVC Conduit Pipe 1.25" <br/>lengths</p>
              <p className='text-1'>Cable pipe for the cable covering </p></Link>
              </div>
              <div className='Recent1'>
              <img className='Recent' src={Recent} alt='Rectangle 47.svg'/>
              <p className='text'>PVC Conduit Pipe 1.25" <br/>lengths</p>
              <p className='text-1'>Cable pipe for the cable covering </p>
              </div>
               <div className='Recent1'>
              <img className='Recent' src={Recent} alt='Rectangle 47.svg'/>
              <p className='text'>PVC Conduit Pipe 1.25" <br/>lengths</p>
              <p className='text-1'>Cable pipe for the cable covering </p>
              </div>
               <div className='Recent1'>
              <img className='Recent' src={Recent} alt='Rectangle 47.svg'/>
              <p className='text'>PVC Conduit Pipe 1.25" <br/>lengths</p>
              <p className='text-1'>Cable pipe for the cable covering </p>
              </div>
               
            </Slide> 
        </div> 

  <div className='plumbing-pipes'>
    <div className='plumbind-head'>
      <h3>Plumbing pipes</h3>
      <div className='plumbing'>
      <div className='plumbing-1'>
       <img className='plumbing-01' src={Plumbing1} alt='Rectangle 47 3.svg'/>
       <p className='plumbing-text1'>Pipe SDR 11 (Class 1)</p>
       <p className='plumbing-text2'>₹2,000</p>
       <p className='plumbing-text3'>CPVC pipe for the hot water and cold water </p>
      </div>
      <div className='plumbing-1'>
       <img className='plumbing-01' src={Plumbing3} alt='Rectangle 47 (1).svg'/>
       <p className='plumbing-text1'>Pipe SDR 11 (Class 1)</p>
       <p className='plumbing-text2'>₹2,000</p>
       <p className='plumbing-text3'>CPVC pipe for the hot water and cold water </p>
      </div>
      <div className='plumbing-1'>
       <img className='plumbing-01' src={Plumbing1} alt='Rectangle 47 3.svg'/>
       <p className='plumbing-text1'>Pipe SDR 11 (Class 1)</p>
       <p className='plumbing-text2'>₹2,000</p>
       <p className='plumbing-text3'>CPVC pipe for the hot water and cold water </p>
      </div>
      <div className='plumbing-1'>
       <img className='plumbing-01' src={Plumbing2} alt='Rectangle 47 (2).svg'/>
       <p className='plumbing-text1'>Pipe SDR 11 (Class 1)</p>
       <p className='plumbing-text2'>₹2,000</p>
       <p className='plumbing-text3'>CPVC pipe for the hot water and cold water </p>
      </div>
      </div>
    </div>
  </div>
  <div className='cart-with-buy'>
    <div className='cart-with-buy1'>
      <img className='Tap-1' src={Tap} alt='Rectangle 48 (1).svg'/>
      <div className='Tap-text'>
      <p className='Tap-text-1'>Concealed Valvr Quarter Turn - Mini Spindle</p>
      <p className='Tap-text-2'>Tap for the water flow used in bathroom and wash base </p>
      <p className='Tap-text-3'>₹ 999</p>
      <button type='Submit' className='Tap-btn'>Buy Now</button>
      </div>
    </div>
    <div className='cart-with-buy1'>
      <img className='Tap-1' src={Tap} alt='Rectangle 48 (1).svg'/>
      <div className='Tap-text'>
      <p className='Tap-text-1'>Concealed Valvr Quarter Turn - Mini Spindle</p>
      <p className='Tap-text-2'>Tap for the water flow used in bathroom and wash base </p>
      <p className='Tap-text-3'>₹ 999</p>
      <button type='Submit' className='Tap-btn'>Buy Now</button>
      </div>
    </div>
    <div className='cart-with-buy1'>
      <img className='Spindle-1' src={Spindle} alt='Rectangle 48 (1).svg'/> 
      <div className='Tap-text'>
      <p className='Tap-text-1'>Concealed Valvr Quarter Turn - Mini Spindle</p>
      <p className='Tap-text-2'>Tap for the water flow used in bathroom and wash base </p>
      <p className='Tap-text-3'>₹ 999</p>
      <button type='Submit' className='Tap-btn'>Buy Now</button>
      </div>
    </div>
    <div className='cart-with-buy1'>
      <img className='Spindle-1' src={Spindle} alt='Rectangle 48 (1).svg'/> 
      <div className='Tap-text'>
      <p className='Tap-text-1'>Concealed Valvr Quarter Turn - Mini Spindle</p>
      <p className='Tap-text-2'>Tap for the water flow used in bathroom and wash base </p>
      <p className='Tap-text-3'>₹ 999</p>
      <button type='Submit' className='Tap-btn'>Buy Now</button>
      </div>
    </div>
  </div>
<div className='Adhessive-head'>
    <h3>Adhesives Solutions</h3>
</div>
<div className='Adhessive'>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
</div>


<div className='Adhessive-head'>
    <h3>Sealing Tape</h3>
</div>
<div className='Adhessive'>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
</div>


<div className='Adhessive-head'>
    <h3>uPVC Aquasafe Pipe</h3>
</div>
<div className='Adhessive'>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
  </div>
  <div className='Adhessive-1'>
    <img className='Adhessive-pic' src={Adhessive} alt='Rectangle 36.svg'/>
    <p className='Adhessive-text-1'>SWIFT RESPONSE LFSGRYR16 <br/>16 oz Flex Seal Liquid, Gray</p>
    <p className='Adhessive-text-2'>₹ 999</p>
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

</>
  )
}

export default Home