import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/display.css';
import Navbar from '../../components/Navabar';
import Sidebar from '../../components/Slidebar';
import axios from 'axios';
import  {useState , useEffect} from 'react';

function Display() {


    // const {_id} = useParams();
    const [sellers , setSeller] =useState([]);

    useEffect( () => {
        async function getSellers(){
             try{
                 const response = await axios.get(`http://localhost:8080/api/seller `);
                 setSeller(response.data);
             }
             catch(error)
             {
                 console.log("Error in" , error);
             }
         }

         
    getSellers();
},[]);



  return (
<>
<Navbar/>
    <div className='create-main'>
    <Sidebar/>
    <div className='create-main2'>
        <div className='Addbutton'>
        <button className='button'>
      <Link 
      className='link11'
      activeClassname ="active"
      to ="/Create/new">
        Add Seller
        
      </Link>
      </button>
        </div>
  
    <div className='display-div'>

    <table className='table'>
      <tbody>
    
            <tr>
            
                <th>
                    Name
                </th>

                <th>
                    Email
                </th>

                <th>
                    PhoneNumber
                </th>

                <th>
                    Address
                </th>

                <th>
                     OutletName
                </th>
                <th>
                     GST_Number
                </th>
                <th>
                     Edit
                </th>
                <th>
                     Delete
                </th>

                
            </tr>

                    {sellers.map(
                        (
                            seller
                        ) =>

                        (

                        
        
                     <tr key ={seller._id}>
                        <td>{seller.Name}</td>
                        <td>{seller.Email}</td>
                        <td>{seller.PhoneNumber}</td>
                        <td>{seller.Address}</td>
                        <td>{seller.OutletName}</td>
                        <td>{seller.GST_Number}</td>
                    <td>
                            <button>
                            <Link to = {`/seller/${seller._id}/edit`}>
                            Edit
                            </Link>
                            </button>
                        </td>

                        <td>
                            <button>
                            <Link to = {`/seller/${seller._id}/delete`}>
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

export default Display