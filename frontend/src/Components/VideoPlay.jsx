import React from "react";
import { useLocation } from "react-router";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
// import Nav from "./NavBar";

const VideoPlay = () => {
  const location = useLocation();
  const movie = location.state?.movieData;
  console.log(movie);
  return (
    <div className="play-video">
      {/* <Nav /> */}
      <div className="videos">
        <div className="main-video">
          <Video autoplay loop className="video-player">
            <source src={movie.videoUrl} type="video/mp4" />
          </Video>
          {/* <video src={movie.videoUrl} alt="main video" controls /> */}
          <div className="main-video-data">
            <div className="main-video-publisher">
              <img
                className="main-video-publisher-img"
                src="https://img.freepik.com/premium-psd/psd-3d-male-cartoon-character-avatar-isolated-3d-rendering_460336-1517.jpg?w=740"
                alt=""
              />
              <div className="main-video-title">
                <h2>{movie.title}</h2>
              </div>
            </div>

            <div className="main-video-data">
              <p>14 Jan, 2023</p>
              <p>{movie.videoDuration} Mins</p>
              <p>200 views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
