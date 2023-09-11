import React from 'react';
import  { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function Login(){
    const [key, setKey] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (key.trim()==='' || password.trim()==='') {
            console.log('Please enter both Key and PASSWORD');
            return;
          }
          try {
            const response = await axios.post('http://localhost:8080/api/adminauth/', {
              key,
              password,
            });
            console.log(response.data);
            console.log("Log in Success");
            navigate(`/admindashboard/`);
          } catch (error) {
            console.error('Login failed in client', error);
            setLoginFailed(true);
          }
        };
    return(
<div className='user-login-model'>
        
<form  onSubmit={handleSubmit}>
    <h1>Stepupcart</h1>
        <label>Email/MobileNumber</label><br/>
        <input
        type='text'
        placeholder='Email/MobileNumber'
        value={key}
        onChange={(e) => setKey(e.target.value)}/>
        <br/> <br/>
        <lable>Password</lable><br/>
        <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <br/> <br/>
        <button type="Submit">LOGIN</button>

</form>
            {loginFailed && (
                <div className="model">
                  <div className="model-content">
                    <h2>Login Failed</h2>
                    <p>Incorrect key or password. Please try again.</p>
                    <button className="button-16" onClick={() => setLoginFailed(false)}>Close</button>
                  </div>
                </div>
              )}
    </div>
    );

 
}


export default Login