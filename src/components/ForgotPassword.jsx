
import { useNavigate } from 'react-router-dom';

function Forgot(){
  const navigate = useNavigate();

  return ( 
    <div className='forgot'>
      Forgot
      <br />
      <br/>
      <button onClick={() =>{
        navigate('/')
      }}>
        Login
      </button>
    </div>
   );
}

export default Forgot;