import React from "react";
import Nav from "../navbar/Nav";
import LoadingPage1 from "../loadingPage/LoadingPage1";
import "../loadingPage/LoadingPage1.css";
import "../loadingPage/LoadingPage2.css";

function LoadingPage2() {
  return (
    <div>
      <div>
        <Nav />
        <LoadingPage1 />
      </div>
      <div className="morethings">
        <a href="#" className="recent">
          Recent
        </a>
        <a href="#" className="viewall">
          View All
        </a>
      </div>

      <div class="row">
        <div class="column">
          <div class="image-container">
            <img
              src="https://th.bing.com/th/id/OIP.KWX4RI7xFtrDcJbXw_AgdQHaE7?pid=ImgDet&rs=1"
              alt="moviePoster"
            />
            <div class="text-overlay">
              <span className="film1">Midway</span> <br />
              <span className="subtitle1">Base On Real Events</span>
              <div id="details1">
                <span className="date1">12 Jan 2023</span>
                <span className="length1"> 14 Mins</span>
                <span className="views1"> 200 Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage2;
