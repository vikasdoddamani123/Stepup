import React from 'react';
import Navbar from "../../components/Navabar";
import '../../css/create.css';
import Sidebar from "../../components/Slidebar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create(props) {

  const initialState = {
    Name : '',
    Email : '',
    PhoneNumber : '',
    Address : '',
    OutletName : '',
    GST_Number : '',

};

      const [seller , setSeller] = useState (initialState);
      const navigate = useNavigate();


      function handleSubmit(event) {
       event.preventDefault();

       async function postSeller() {
        try {
          const response = await axios.post("http://localhost:8080/api/seller", seller);
          navigate(`/seller/:_id${response.data._id}`);
          // navigate(`/seller ${response.data._id}`);
        console.log("data added");
        }
        catch (error) {
        console.log("error", error);
      }

       }
           postSeller();
      }
      
    function handleChange(event) {
      setSeller({ ...seller, [event.target.name]: event.target.value });
    }
    // function handleCancel() {

    //    navigate("/seller/:_id");
    // }




  return (
    <div className='create-container'>
    <Navbar/>
    <div className='create-main'>
    <Sidebar/>
    <div className='create-main2'>


<div className='create-main-div'>
        <h1>Add New Seller</h1>
        </div>
        <div className='form-div1'>
        <form className='form' onSubmit={handleSubmit}>
           <div className='div1'></div>
            <input
                placeholder='NAME'
                className='input'
                value={seller.Name}
                type='text'
                name='Name'
                onChange={handleChange}
            />

            
            <input
                placeholder='Email'
                className='input'
                value={seller.Email}
                type='Email'
                name='Email'
                onChange={handleChange}
            />

            
           
            <input
                placeholder='PhoneNumber'
                className='input'
                value={seller.PhoneNumber}
                type='text'
                name='PhoneNumber'
                onChange={handleChange}
            />

            
            <input
                placeholder='Address '
                className='input'
                value={seller.Address}
                type='text'
                name='Address'
                onChange={handleChange}
            />

            
            <input
                placeholder='OutletName '
                className='input'
                value={seller.OutletName}
                type='text'
                name='OutletName'
                onChange={handleChange}
            />
            <input
                placeholder='GST_Number '
                className='input'
                value={seller.GST_Number}
                type='text'
                name='GST_Number'
                onChange={handleChange}
            />

            
           

            <div className='btn-submit'>
              <button className='btnn' 
              type='submit' 
            > DONE </button></div>
            <div className='div2'></div>
        </form>

        
        </div> 
    </div>
    </div>
    </div>
  )
}

export default Create






