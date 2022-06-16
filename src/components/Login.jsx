import React from 'react';
import { useNavigate } from 'react-router-dom'

function Login(){
  const navigate = useNavigate();
  
  return ( 
    <div className='Login'>
      Login

        <br />
        <br />
      <button onClick={() =>{
          localStorage.setItem('token', 'dummys')
          navigate('/dashboard')
        }}
      >
        Sign in
      </button>
      <div
        onClick={() =>{
            navigate('/forgot')
          }}
      >
        <br />
        <br />
        <button>
          Forgot password
        </button>
      </div>
    </div>
   );
}

export default Login;