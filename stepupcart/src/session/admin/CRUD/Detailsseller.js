import React from 'react'
import Navbar from '../components/Navabar'
import Sidebar from '../components/Slidebar'
import { Link } from 'react-router-dom'

function Detailsseller() {
  return (
   <>
<Navbar/>
    <div className='sidebar-div'>
<Sidebar/>
   <h1>Seller added successfully</h1>
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