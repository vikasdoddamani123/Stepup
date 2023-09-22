import React ,{useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navabar';
import Sidebar from '../components/Slidebar';


function Deleteseller(props) {
 
    const [seller , setSeller] = useState({});
    const {_id} = useParams();
    const navigate = useNavigate();


    useEffect( ()=>
        {
            async function deleteSellerById()
            {
                try{
                    const response = await axios.get(`http://localhost:8080/api/seller/${_id}`);
                    setSeller(response.data);
                }
                catch(error)
                {
                    console.log("error");
                }
            }
            deleteSellerById();
        },[_id]
    );


    async function handleDelete()
    {
        try{
            await axios.delete(`http://localhost:8080/api/seller/${_id}`);
            navigate("/seller/Display");
        }
        catch(error)
        {
            console.log("error");
        }
    }
  return (
<>
<Navbar/>
    <div className='sidebar-div'>
<Sidebar/>
        <div className='button01'>
        <div className='delete-div'>
            <h4>Name  </h4>:{seller.Name}
            <br/> <br/>
            <h4>Role</h4> : {seller.OutletName}
            </div>
           
            <button onClick={handleDelete} className='button02'>
               <h3> Delete</h3>
            </button>
        </div>
        </div>
</>
  )
}

export default Deleteseller;