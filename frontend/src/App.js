<<<<<<< HEAD

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
=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
// import LoadingPage1 from "./Components/Home";
// import FetchVideo from "./Components/VideoFetch";
// import Nav from "./Components/NavBar";
import Signup from "./Components/signup";
import Login from "./Components/login";
import VideoUpload from "./Components/Vupload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
  );
}

export default App;
