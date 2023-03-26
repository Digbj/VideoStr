import React from 'react';


function Nav() {


  return (
    <div className="navigation-bar">
      <span className='logo'>Tuner</span>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-links">
     <p>Login</p>
     <span>|</span>
     <p>Register</p> 
      </div>
      
    </div>
  );
}

export default Nav;
