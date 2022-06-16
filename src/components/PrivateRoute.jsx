import { Navigate } from "react-router-dom"

function PrivateRoute({ children }){
  const loggedIn = localStorage.getItem('token') ? true : false;
  
  return ( 
    <>
      {loggedIn ? children : <Navigate to='/' />}
    </>
   );
}

export default PrivateRoute;