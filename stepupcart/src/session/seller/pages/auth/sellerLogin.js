

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

 

function SellerLogin() {

  const [key, setKey] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [loginFailed, setLoginFailed] = useState(false);

 

  const handleSubmit = async (e) => {

    e.preventDefault();

   console.log('handleSubmit called');

    if (key.trim() === '' || password.trim() === '') {

      console.log('Please enter both Key and PASSWORD');

      return;

    }

 

    try {

      const response = await axios.post('http://localhost:8080/api/selleradmin', {

        key,

        password

      });

 

      console.log(response.data);

      console.log("Log in Success");

      navigate(`/sellerdashboard`);

    } catch (error) {

      console.error('Login failed in client', error);
      console.log('internal error');

      setLoginFailed(true);

    }

  };

 

  return (

    <div className='user-login-model'>

      <form onSubmit={handleSubmit} className='login-form'>

        <h1>StepUpCart</h1>

        <br />

        <label>Email/MobileNumber</label><br />

        <input

          className='email-text'

          type='text'

          placeholder='Email/MobileNumber'

          value={key}

          onChange={(e) => setKey(e.target.value)}

        />

        <br /> <br />

        <label>Password</label><br />

        <input

          className='password-text'

          type='password'

          placeholder='Password'

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <br /> <br />

        <div className='login'>

          <button type="submit" className='login-text'>LOGIN</button>

        </div>

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

 

export default SellerLogin;
