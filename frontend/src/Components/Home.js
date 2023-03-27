import React from "react";
<<<<<<< HEAD
import Nav from "./NavBar"
import axios from "axios";
import {useState,useEffect } from "react";
import { useSelector } from "react-redux";
import FetchVideo from "./VideoFetch";
const HomePage=()=> {
  
  const [videos, setVideos] = useState("")
  const { currentUser } = useSelector((state) => state.user);
  const GetData=()=>{
      // const key = '541e4e6113f4a245be41d653a35850a6'
      const url = `http://localhost:8080/api/videos/get-random`
      const getPic = () => {
          axios.get(url,{
            headers: {
              token: "Bearer " + currentUser.accessToken,
            },
          })
              .then((res) => setVideos((res.data)))
              .catch((err) => { console.log(err) })
              .finally(() => { })
          console.log(videos);
          // console.log(currentUser.accessToken)
      }
      getPic()
  }
  
  // useEffect(()=>{
   
    GetData();

  // })
  return (
    <>
   <Nav/>
    <div>
      <div className="Image">
        {/* {videos.map((data,index)=>{
          return( */}
          <video  controls src={videos.videoUrl} type="video/mp4"/>
        {/* )})} */}
      
      </div>
      {/* <div id="filmName">
=======
import Nav from "./NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FetchVideo from "./VideoFetch";
const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [userName, setUserName] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const GetData = async () => {
      const url = `http://localhost:8080/api/videos/get-random`;

      const res = await axios.get(url, {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      });
      setVideos(res.data);

      if (res.data) {
        const getUser = await axios.get(
          `http://localhost:8080/api/users/get-User/${res.data[0].publisherId}`
        );
        setUserName(getUser.data.username);
      }
    };

    GetData();
  }, [currentUser]);

  console.log(videos, userName);
  return (
    <>
      <Nav />
      <div>
        <div className="Image">
          <video src={videos[0]?.videoUrl} type="video/mp4" />
          <h2 className="video-title">{videos[0]?.title}</h2>
          <div className="video-data">
            <p>14 Jan, 2023</p>
            <p>14 Mins</p>
            <p>200 views</p>
          </div>
          <div className="publisher">
            <img
              className="publisher-img"
              src="https://img.freepik.com/premium-psd/psd-3d-male-cartoon-character-avatar-isolated-3d-rendering_460336-1517.jpg?w=740"
              alt=""
            />
            <p>{userName}</p>
          </div>
        </div>
        {/* <div id="filmName">
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
        <span className="film">Midway</span> <br />
        <span className="subtitle">Base On Real Events</span>
      </div>
      <div id="details">
        <span className="date">12/04/2023</span>
        <span className="length">14 Mins</span>
        <span className="views">200 Views</span>
      </div>
      <div className="profile">
        <img
          src="https://i.pinimg.com/474x/be/e7/71/bee771ceb7c25e8006acb322e284d2f6--sunsets-sky.jpg"
          alt="profile pic"
        />
        <span>user name</span>
      </div> */}
<<<<<<< HEAD
    </div>
    
    <FetchVideo/>
=======
      </div>

      <FetchVideo />
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
    </>
  );
};

export default HomePage;

<<<<<<< HEAD


// "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/ghoul.mp4"
=======
// "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/ghoul.mp4"
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
