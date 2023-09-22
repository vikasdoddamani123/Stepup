import React from 'react';
// import FileBase64 from 'react-file-base64';
import Navbar from "../../../admin/components/Navabar";
import '../../CSS/createproducts.css';
import Sidebar from "../../components/Sellersidebar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Createproduct(props) {

  const initialState = {
    Image : '',
    Product_Title : '',
    Product_ID : '',
    Product_sales : '',
    Price : '',
    registerPhoto : null,


};

      const [product , setProduct] = useState (initialState);
      const navigate = useNavigate();

      const handleSubmit = async (event) => {
        event.preventDefault()
        if (!product.registerPhoto) {
            console.log("Please select an register copy.");
            return;
          }
    
          const postproduct = async() =>
          {
            try{
              const formData = new FormData();
              formData.append("Image",product.Image);
              formData.append("Product_Title",product.Product_Title);
              formData.append("Product_ID",product.Product_ID);
              formData.append("Product_sales",product.Product_sales);
              formData.append("Price",product.Price);
              formData.append("registerPhoto",product.registerPhoto);

              const response = await axios.post(
                "http://localhost:8080/api/products/",formData
            );
            console.log(response);

            if (response.status === 200) {
              setProduct(initialState);
              navigate(`/products/display/`);
            } else {
              console.error("Failed to submit form.");
            }
          } catch (error) {
            console.error("Error:", error);
          }
          
            };
            postproduct();
          }

          function handleChange(event) {
            const { name, value, files } = event.target;
            let updates = {};
        
            if (name === "registerPhoto"  && files ) {
                console.log("Updating register copy:", files[0]);
                updates = { ...product, registerPhoto: files[0] };
              } else {
                console.log(`Updating ${name}: ${value}`);
                updates = { ...product, [name]: value };
            }
            
            setProduct(updates);
        }
        

  return (
    <div className='create-container'>
    <Navbar/>
    <div className='create-main'>
    <Sidebar/>
    <div className='create-main2'>


<div className='create-main-div'>
        <h1>Add New Product</h1>
        </div>
        <div className='form-div2'>
        <form className='form2' onSubmit={handleSubmit}>
           <div className='div2'></div>
           <table className='form-add-product'>
            <tr className='tab1'>
              <td>
            <input
                placeholder='Image'
                className='input'
                value={product.Image}
                type='text'
                name='Image'
                onChange={handleChange}
            />
            </td>


            <td>
            <input
                placeholder='Product_Title'
                className='input'
                value={product.Product_Title}
                type='text'
                name='Product_Title'
                onChange={handleChange}
            />
            </td>
            
           <td>
            <input
                placeholder='Product_ID'
                className='input'
                value={product.Product_ID}
                type='text'
                name='Product_ID'
                onChange={handleChange}
            />
            </td>
            <td>

          
            
            <input
                placeholder='Product_sales '
                className='input'
                value={product.Product_sales}
                type='text'
                name='Product_sales'
                onChange={handleChange}
            />
  </td>
            <td>

    
            <input
                placeholder='Price '
                className='input'
                value={product.Price}
                type='text'
                name='Price'
                onChange={handleChange}
            />
        </td>
                    <td>
             <input
                    className="input2"
                    placeholder="registerPhoto"
                    name="registerPhoto"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleChange}
                    
                  />
            </td>
        <tr>
          <td>

         
        <div className='btn-submit'>
              <button className='btnn' 
              type='submit' 
            > DONE </button>
            
    <button type='clear' className='button-22'>Clear</button>
            <div className='div2'></div>
            </div>
            </td>
        </tr>
          
            </tr>
            </table>
        </form>

        
        </div> 
    </div>
    </div>
    </div>
  )
}

export default Createproduct






