import React ,{useState , useEffect} from 'react';
import '../css/create.css';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import Navbar from '../components/Navabar';
import Sidebar from '../components/Slidebar';

const Updateseller = () => {

    const initState = {
        Name : '',
        Email : '',
        PhoneNumber : '',
        Address : '',
        OutletName : '',
        GST_Number : '',

    };
    const [seller , setSeller] =useState(initState);
    const {_id} = useParams();
    const navigate = useNavigate();


    useEffect( ()=>
    {
        async function fetchSellerData()
        {
            try{
                const response = await axios.get(`http://localhost:8080/api/seller/${_id}` );
                setSeller(response.data);
            }
            catch(error)
            {
                console.log(error);
                console.log("can not fit interface data updation");
            }
        }

        fetchSellerData();
    },[_id]);

    function handleSubmit(event)
    {
        event.preventDefault();
        async function UpdateSeller()
        {
            try{
                await axios.patch(`http://localhost:8080/api/seller/${_id}`,seller);
                // navigate(`/seller/${_id}`);
                navigate(`/seller/Display`)
                console.log("updated");
            }
            catch(error)
            {
                console.log("Update Failed");
            }
        }

        UpdateSeller();
    };

    function handleChange(event)
    {
        setSeller({...seller,[event.target.name] : event.target.value});
    }



    return (
<>
<Navbar/>
<div className='sidebar-div'>
<Sidebar/>
<div className='sidebar-div2'>

    <div className='main-div'>
        <h1>Update Seller</h1>
    </div>
    <div className='form-div'>
        <form className='form' onSubmit={handleSubmit}>
           <div className='div1'></div>
            <input
                
                className='input'
                value={seller.Name}
                type='text'
                name='Name'
                onChange={handleChange}
            />
                <input
                
                className='input'
                value={seller.Email}
                type='Email'
                name='Email'
                onChange={handleChange}
            />
                <input
                
                className='input'
                value={seller.PhoneNumber}
                type='text'
                name='PhoneNumber'
                onChange={handleChange}
            />
               <input
                
                className='input'
                value={seller.Address}
                type='text'
                name='Address'
                onChange={handleChange}
            />
                <input
            
                className='input'
                value={seller.OutletName}
                type='text'
                name='Role'
                onChange={handleChange}
            />
            <input
            
            className='input'
            value={seller.GST_Number}
            type='text'
            name='Role'
            onChange={handleChange}
        />
            <div className='btn-submit'><button className='btnn' type='submit'> UPDATE </button></div>
            <div className='div2'></div>
        </form>
        <div/>
</div>
</div>
</div>
</>
    )
}

export default Updateseller;