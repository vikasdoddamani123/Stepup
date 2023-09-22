import React from 'react';
import { Link  } from 'react-router-dom';

import Navbar from '../../../admin/components/Navabar';
import Sidebar from '../../components/Sellersidebar';
import axios from 'axios';
import  {useState , useEffect} from 'react';


function Displayproduct() {

   
  const [products , setProduct] =useState([]);

useEffect( () => {
   async function getproducts(){
        try{
            const response = await axios.get(`http://localhost:8080/api/products/showproduct`);
            setProduct(response.data);
        }
        catch(error)
        {
            console.log("Error in" , error);
        }
    }

    getproducts();
},[]);








  return (

    <>
    <Navbar/>
    <div className='sidebar-div'>
    <Sidebar/>
    <div className='sidebar-div2'>

    <br/>
    

    <div className='display-div'>

    <table className='table'>
      <tbody>
    
            <tr>
                <th>
                     ImageName
                </th>

                <th>
                     Product_Title
                </th>

                <th>
                    Product_ID
                </th>

                <th>
                     Product_sales
                </th>

                <th>
                    Price
                </th>

                <th>
                        registerPhoto
                </th>
                <th>
                    Update
                </th>
                <th>
                    Delete
                </th>
            </tr>

                {products.map(
                    (
                        product
                    ) =>
                (



                     <tr key ={product._id}>
                        <td>{product.Image}</td>
                        <td>{product.Product_Title}</td>
                        <td>{product.Product_ID}</td>
                        <td>{product.Product_sales}</td>
                        <td>{product.Price}</td>
                        <td>{product.registerPhoto}
                        {/* <img src={`http://localhost:8080/${product.registerPhoto?.path}`} alt="Imagefile" /> */}
                        </td>

                        <td>
                            <button>
                            <Link to = {`/products/${product._id}/edit`}>
                            Edit
                            </Link>
                            </button>
                        </td>

                        <td>
                            <button>
                            <Link to = {`/products/${product._id}/delete`}>
                            Delete
                            </Link>
                            </button>
                        </td>

                    </tr>
         )
         )}

          </tbody>

        </table>

    </div>

</div>

</div>



    </>

  )
}

export default Displayproduct;