import React from 'react';
import Navbar from "../../components/Navabar";
import '../../css/create.css';
import Sidebar from "../../components/Slidebar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create(props) {

  const initialState = {
    firstName : '',
    lastName : '',
    PhoneNumber : '',
    email : '',
    address1 : '',
    address2 : '',
    landMark : '',
    state : '',
    city : '',
    pinCode : '',
    country : '',
    outletName : '',
    adharNumber : null,
    pancard : null,
    GST_Number : '',
    registeredCopy : null,
    password : '',
    confirmPassword : '',
    sellerId: '',


};

      const [seller , setSeller] = useState (initialState);
      const navigate = useNavigate();
      const [sellerId, setSellerId] = useState('');

    const { v4: uuidv4 } = require('uuid');
    const uuid = uuidv4();

    const generateUUID = () => {
    const random8DigitNumber = uuid.substring(0, 8);
    setSellerId({...seller,sellerId : random8DigitNumber});
    
    };


      function handleSubmit(event) {
       event.preventDefault();

       async function postSeller() {
        try {

          const formData = new FormData();
          formData.append("firstName", seller.firstName);
          formData.append("lastName", seller.lastName);
          formData.append("PhoneNumber", seller.PhoneNumber);
          formData.append("email", seller.email);
          formData.append("address1", seller.address1);
          formData.append("address2", seller.address2);
          formData.append("landMark", seller.landMark);
          formData.append("state", seller.state);
          formData.append("city", seller.city);
          formData.append("pinCode", seller.pinCode);
          formData.append("country", seller.country);
          formData.append("outletName", seller.outletName);
          formData.append("adharNumber", seller.adharNumber);
          formData.append("pancard", seller.pancard);
          formData.append("GST_Number", seller.GST_Number);
          formData.append("registeredCopy", seller.registeredCopy);
          formData.append("password", seller.password);
          formData.append("confirmPassword", seller.confirmPassword);
          formData.append("sellerId", seller.sellerId);

          const response = await axios.post("http://localhost:8080/api/seller", formData);

        //   navigate(`/seller/:_id${response.data._id}`);
        //   // navigate(`/seller ${response.data._id}`);
        // console.log("data added");
        // console.log({sellerId});

        if (response.status === 200) {
          setSeller(initialState);
          navigate(`/seller/view/${response.data._id}`);
          console.log("data added");
          console.log({sellerId});
        } else {
          console.error("Failed to submit form.");
        }

        }
        catch (error) {
        console.log("error", error);
      }

       }
           postSeller();
      }
      
    function handleChange(event) {
      // setSeller({ ...seller, [event.target.name]: event.target.value });
      const { name, value, files } = event.target;
      let updates = {};
      if (name === "adharNumber"  && files ) {
          console.log("Updating adhar copy:", files[0]);
          updates = { ...seller, adharNumber: files[0] };
      } else if (name === "pancard"  && files) {
          console.log("Updating pancard copy:", files[0]);
          updates = { ...seller, pancard: files[0] };
      }else if (name === "registeredCopy"  && files) {
        console.log("Updating registered Copy copy:", files[0]);
        updates = { ...seller, registeredCopy: files[0] };
    } else {
          console.log(`Updating ${name}: ${value}`);
          updates = { ...seller, [name]: value };
      }

      setSeller(updates);
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
                placeholder=' FIRST NAME'
                className='input'
                value={seller.firstName}
                type='text'
                name='firstName'
                onChange={handleChange}
            />

            
            <input
                placeholder='LAST NAME'
                className='input'
                value={seller.lastName}
                type='text'
                name='lastName'
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
                placeholder='EMAIL'
                className='input'
                value={seller.email}
                type='email'
                name='email'
                onChange={handleChange}
            />

            
            <input
                placeholder='Address1 '
                className='input'
                value={seller.address1}
                type='text'
                name='address1'
                onChange={handleChange}
            />

              <input
                placeholder='Address2 '
                className='input'
                value={seller.address2}
                type='text'
                name='address2'
                onChange={handleChange}
            />

            
            <input
                placeholder='LAND MARK '
                className='input'
                value={seller.landMark}
                type='text'
                name='landMark'
                onChange={handleChange}
            />

              <input
                placeholder='STATE '
                className='input'
                value={seller.state}
                type='text'
                name='state'
                onChange={handleChange}
            />

              <input
                placeholder='CITY '
                className='input'
                value={seller.city}
                type='text'
                name='city'
                onChange={handleChange}
            />

              <input
                placeholder='PINCODE '
                className='input'
                value={seller.pinCode}
                type='text'
                name='pinCode'
                onChange={handleChange}
            />

              <input
                placeholder='COUNTRY '
                className='input'
                value={seller.country}
                type='text'
                name='country'
                onChange={handleChange}
            />

              <input
                placeholder='OUTLETNAME '
                className='input'
                value={seller.outletName}
                type='text'
                name='outletName'
                onChange={handleChange}
            />

              <input
                placeholder='ADHARNUMBER '
                className='input'
                value={seller.adharNumber}
                type='text' 
                name='adharNumber'
                onChange={handleChange}
            />

              <input
                // placeholder='Address1 '
                className='input'
                // value={seller.adharNumber}
                type='file'
                accept=".png, .jpg, .jpeg"
                name='adharNumber'
                onChange={handleChange}
            />

              <input
                placeholder='PANCARD '
                className='input'
                value={seller.pancard}
                type='text'
                name='pancard'
                onChange={handleChange}
            />

              <input
                // placeholder='Address1 '
                className='input'
                // value={seller.pancard}
                type='file'
                accept=".png, .jpg, .jpeg"
                name='pancard'
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

              <input
                // placeholder='Address1 '
                className='input'
                // value={seller.registeredCopy}
                type='file'
                name='registeredCopy'
                accept=".png, .jpg, .jpeg"
                onChange={handleChange}
            />

              <input
                placeholder='PASSWORD '
                className='input'
                value={seller.password}
                type='text'
                name='password'
                onChange={handleChange}
            />

              <input
                placeholder='CONFIRM PASSWORD '
                className='input'
                value={seller.confirmPassword}
                type='text'
                name='confirmPassword'
                onChange={handleChange}
            />

                  <input
                    className="input"
                    placeholder=""
                    name="sellerId"
                    type="hidden"
                    value={seller.sellerId}
                    onChange={generateUUID}
                    
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

export default Create;






