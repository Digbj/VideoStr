
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home';
import LoadingPage1 from './Components/Home';
import FetchVideo from './Components/VideoFetch';
import Nav from './Components/NavBar';
import SigninSignup from './Components/signupLogin';
import VideoUpload from './Components/Vupload';
import Vcarousel from './Components/Carausal';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<SigninSignup/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
     {/* <SigninSignup/> */}
     {/* <VideoUpload/> */}
    {/* <Nav/> */}
    
    {/* <FetchVideo/> */}
    
    {/* <Vcarousel/> */}
    
    </div>
  );
}

export default App;
