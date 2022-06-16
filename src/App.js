import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Forgot from './components/ForgotPassword';

function App(){
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  // If the user is logged in and the app is refreshed or user enters only the base url it should redirect to dashboard.
  useEffect(() =>{
    const loggedIn = localStorage.getItem('token') ? true : false;
    if (loggedIn && window.location.pathname === '/') {
      navigate('/dashboard')
    }
    setLoading(false)

  }, [])
  
  return (
    <div className="App">
      {loading ?
        <div> 
          loading...
        </div> 
        : 
        <Routes>
          <Route path="*" element={<Layout />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/' element={<Login />} />
        </Routes>
      }
      </div>
  );
}

export default App;
