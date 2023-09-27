import React from 'react';
import './css/indexpage.css'
import Navigationbar from './Components/Navigationbar';
import Banner from './images/photo_2023-02-07_12-58-41 1.svg';
import Banner1 from './images/heading flex 1 3.svg';
import Banner2 from './images/Rectangle 41.svg';
import Banner3 from './images/Rectangle 45.svg';
import Banner4 from './images/Rectangle 12.svg';
import Banner5 from './images/Rectangle 43.svg';
// import Footer from './Components/userFooter'

function indexpage() {
  return (
<>
<Navigationbar/>
<div className='Banner-grp'>
<div className='Banner11'>

<img className='photo11'src ={Banner1} alt="heading flex 1 3.svg"/> 
<img className='photo1'src ={Banner} alt="photo_2023-02-07_12-58-41 1.svg"/> 
<div className='text11'>
    <div className='text111'>
<p>
    All You Need For<br/>
     Your Building
</p>
<div className='text112'>
<p>
    Get Materials<br/>
    At The Best Price
</p>  
</div>   
</div>
</div>
<div className='index-btn'>
    <button className='index-btn1'
    type='submit'>Get Started</button>
</div>
</div>
<div className='Banner22'>
<img className='photo22'src ={Banner4} alt="Rectangle 12.svg"/>
<img className='photo2'src ={Banner2} alt="Rectangle 41.svg"/> 
<div className='text22'>
    <div className='text222'>
        <p>EVER GOT MATERIALS RIGHT TIME?</p>
    </div>
    <div className='text223'>
        <p>Delivering Materials <br/>
        Made Easier </p>
    </div>

</div>
<div className='index-btn22'>
    <button className='index-btn2'
    type='submit'>Learn More</button>
</div>
</div>
<div className='Banner33'>
<img className='photo3'src ={Banner5} alt="Rectangle 43.svg"/>
<img className='photo33'src ={Banner3} alt="Rectangle 45.svg"/> 
<div className='text33'>
    <div className='text333'>
        <p>
            Connect With StepUpCart<br/>
            Get 3 Steps Materials Delivering
        </p>
    </div>
    <div className='text334'>
        <p>
            Get Quotations From <br/>
            Various Outlets at<br/>
             BEST PRICE
        </p>
    </div>
</div>
</div>
</div>



</>
   
  )
}

export default indexpage