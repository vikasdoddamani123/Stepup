import React from "react";
import Navbar from "../components/Navabar";
import '../css/dashboard.css';
import Sidebar from "../components/Slidebar";


function Dashboard() {


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
        <h1>Admin Dashboard</h1>
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
       <p className="title">Total Visit</p>
    <p className="title1">9,676</p>
    <div className="percent">
    <p className="title2">+12% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Total Order</p>
    <p className="title1">999</p>
    <div className="percent">
    <p className="title2">+69% </p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Order Delivered</p>
    <p className="title1">99,676</p>
    <div className="percent">
    <p className="title2">+45%</p><p className="title3">since last month</p>
    </div>
    </div>
</div>
<div className="submain">
    <div className="box">
       <p className="title">Total User</p>
    <p className="title1">99,676</p>
    <div className="percent">
    <p className="title2"> +45%</p><p className="title3">since last month</p>
    </div>
    </div>
</div>
</div>
    
</div>
</>
        
    )
}



export default Dashboard