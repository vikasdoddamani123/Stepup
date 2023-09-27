import React, { useState } from 'react'
import '../../css/register.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom"



function Userregister() {
  const [FirstName, setFirstName] = useState()
  const [Lastname,setLastname] = useState()
  const [key,setkey] = useState()
  const [password,setpassword] = useState()
  const [Confirmpassword,setConfirmpassword] = useState()

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    async function postRegister(){
      try{
        const response = await axios.post("http://localhost:8080/api/register",{FirstName,Lastname,key,password,Confirmpassword})
        navigate(`/userLogin`);
        console.log(response.data)
        console.log("register success")
      }catch (error) {
        console.error('register failed in client', error)
        console.log("error",error);
      }
    }
    
    postRegister();
  }

  return (
<>
<div className='user-register'>
    <form className='register-form' onSubmit={handleSubmit}>
        <p className='user-heading'>Create Your Account</p>
        <br/>
        <input
        className='firstname'
        type='text'
        placeholder='FirstName'
        autoComplete='off'
        onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <input
        className='lastname'
        type='text'
        placeholder='LastName'
        autoComplete='off'
        onChange={(e) => setLastname(e.target.value)}
        />
        <br/>
        <input
        className='email'
        type='Email'
        placeholder='Email/MobileNumber'
        autoComplete='off'
        onChange={(e) => setkey(e.target.value)}
        />
        <br/>
        <input
        className='password'
        type='password'
        placeholder='Password'
        autoComplete='off'
        onChange={(e) => setpassword(e.target.value)}
        />
        <br/>
        <input
        className='confirmpassword'
        type='text'
        placeholder='ConfirmPassword'
        autoComplete='off'
        onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <br/> <br/>
        <div className='register-text'>
            <p className='reg-text-1'>By creating an account,You agree to our Terms of service <br/>
            and ahve read and understood the privacy policy</p>
        </div>
        <br/>
        <div className='continue'>
            <button type='submit' className='continue-text' >Continue</button>
        </div>

    </form>
</div>
</>
  )
}

export default Userregister