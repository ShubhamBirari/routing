import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
  return ( 
    <>
      <div className="sidebar">
        SideBar
        <nav>
          <div>

          <NavLink to={'/dashboard'}>
            Dashboard
          </NavLink>
          </div>
          <div>

          <NavLink to={'/users'}>
            Users
          </NavLink>
          </div>
          <NavLink to={'/settings'} >
            Settings
          </NavLink>


          <br /><br/>
          <NavLink to={'/'} onClick={()=>{ localStorage.clear() }}>
            Logout
          </NavLink>
        </nav>
      </div>
    </>
   );
}

export default SideBar;