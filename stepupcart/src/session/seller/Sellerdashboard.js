import React from "react";
import Navbar from "../admin/components/Navabar";
import '../seller/CSS/Sellerdashboard.css';
import Sidebar from "../seller/components/Sellersidebar";


function Sellerdashboard() {


    return(
<>
<Navbar/>
<div className="Main">
<Sidebar/>
    {/* <div className="title">
<h1>Admin Dashboard</h1>
</div> */}
<br/> <br/>
<div className="Main-1">
<div className="dashboard-text">
        <h1>Seller Dashboard</h1>
    </div>
<div className="submain">
    <div className="box">
       <p className="title">Total Revenue</p>
    <p className="title1">₹9,99,676</p>
    <div className="percent">
    <p className="title2">+45% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Total Sales</p>
    <p className="title1"> 99,676</p>
    <div className="percent">
    <p className="title2">+53% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Total Orders</p>
    <p className="title1">9,676</p>
    <div className="percent">
    <p className="title2">+12% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Order Delivered</p>
    <p className="title1">999</p>
    <div className="percent">
    <p className="title2">+69% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Product Listed</p>
    <p className="title1">676</p>
    {/* <div className="percent">
    <p className="title2">+45%</p><p className="title3">since last month</p>
    </div> */}
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Active Products</p>
    <p className="title1">676</p>
    {/* <div className="percent">
    <p className="title2"> +45%</p><p className="title3">since last month</p>
    </div> */}
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Paused Listed</p>
    <p className="title1">676</p>
    {/* <div className="percent">
    <p className="title2"> +45%</p><p className="title3">since last month</p>
    </div> */}
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Disabled Products</p>
    <p className="title1">676</p>
    {/* <div className="percent">
    <p className="title2"> +45%</p><p className="title3">since last month</p>
    </div> */}
    </div>
</div>
</div>
    
</div>
</>
        
    )
}



export default Sellerdashboard