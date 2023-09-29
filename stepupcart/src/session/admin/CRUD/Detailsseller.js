import React from 'react'
import Navbar from '../components/Navabar'
import Sidebar from '../components/Slidebar'
import { Link , useParams } from 'react-router-dom';
import axios from 'axios';
import  {useState , useEffect} from 'react';

function Detailsseller() {

  const {_id} = useParams();
    const [seller , setSeller] =useState([]);


    useEffect( () => {
      async function getSellers(){
           try{
   
               const response = await axios.get(`http://localhost:8080/api/seller/${_id}`);
               setSeller(response.data);
           }
           catch(error)
           {
               console.log("Error in" , error);
           }
       }
   
       getSellers();
   },[_id]);
   





  return (
   <>
<Navbar/>
    <div className='sidebar-div'>
<Sidebar/>

   <h1>Seller added successfully</h1>
   <p>Seller ID: {seller.sellerId}</p>
   <Link to="/seller/Display">
   <button type="view" className="view-button">
    <div className="view-button-text">View seller</div>
</button>
   </Link>


   </div>
  

   


   </>
  )
}

export default Detailsseller