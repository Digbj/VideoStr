import React from 'react';
import { useState } from 'react';
const Login=()=>{
    const[sform,setsform]=useState({
        s_userName:'',
        s_Password:''

    });
   

    const Handler=()=>{
        console.log(sform)
    }
    return(
        <div className='login-container1'>
            <div className='login-container'>
            <h1>Sign In</h1>
            <p>Sign in to continue access pages</p>
            <div className='S-inp'>
            <input className='S-Email' placeholder="Email..." type='email' onChange={(e)=>{setsform({...sform,s_userName:e.target.value})
                    }} />
            </div>
            <div className='S-inp'>
            <input className='S-Password' placeholder="Password..." type='password' onChange={(e)=>{setsform({...sform,s_Password:e.target.value})
                    }} />    
            </div>

            <button className='btnS' onClick={Handler}>SignIn</button>
            </div>
           
        </div>
    )
}
export default Login;