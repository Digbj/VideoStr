import React from "react";
import { useState } from 'react';
const Registration=()=>{
    const [form,setform]=useState({
        userPic:"",
        userName:"",
        userEmail:"",
        userPhoneNo:"",
        userProfession:"",
        userPassword:""
    })

    const Handler=()=>{
        console.log(form)
    }

    return(
        <div className='regis'>
            <h1>Register</h1>
            <p>Register to continue access pages</p>
            <div className='profilepic'><input type='file' placeholder="+"/></div>
            <div className='inp'>
            <input  placeholder="Name..." type='text' onChange={(e)=>{setform({...form,userName:e.target.value})
                    }}/>
            </div>
            <div className='inp'>
            <input className='R-Email' placeholder="Email..." type='email' onChange={(e)=>{setform({...form,userEmail:e.target.value})
                    }}/>
            </div>
            <div className='inp'>
            <input className='R-Phone' placeholder="Phone..." type='text' onChange={(e)=>{setform({...form,userPhoneNo:e.target.value})
                    }}/>  
            </div>
            <div className='inp'>
            <input className='R-Profession' placeholder="Profession..." type='text' onChange={(e)=>{setform({...form,userProfession:e.target.value})
                    }}/>   
            </div>
            <div className='inp'>
            <input className='R-Password' placeholder="Password..." type='password' onChange={(e)=>{setform({...form,userPassword:e.target.value})
                    }}/>    
            </div>
            <div className='inp'>
            <input className='R-ConfirmP' placeholder="Confirm password..." type='password' onChange={(e)=>{setform({...form,userCPassword:e.target.value})
                    }}/>    
            </div>
            <button className='btnR' onClick={Handler}>Register</button>
        </div>
    )
}
export default Registration;