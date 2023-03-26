import React from "react";
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
    </div>
    
    <FetchVideo/>
    </>
  );
}

export default HomePage;



// "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/ghoul.mp4"