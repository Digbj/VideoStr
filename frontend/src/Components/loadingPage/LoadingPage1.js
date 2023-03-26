import React from "react";
// import Nav from "../navbar/Nav";
import "../loadingPage/LoadingPage1.css";

function loadingPage1() {
  return (
    <>
    <div>
      <div className="Image">
        <img
          src="https://veteranlife.com/wp-content/uploads/2022/10/midway-movie.jpg"
          alt="Movieposter"
        />
      </div>
      <div id="filmName">
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
      </div>
    </div>

    
    

    </>
  );
}

export default loadingPage1;
