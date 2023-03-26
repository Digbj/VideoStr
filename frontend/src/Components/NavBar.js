import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


  return (
    <div className="navigation-bar">
      <span className='logo'>Tuner</span>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-links">
   <Link to='/login'><p>Login</p></Link>
     <span>|</span>
     <Link to='/login'> <p>Register</p></Link> 
      </div>
      
    </div>
  );
}

export default Nav;
