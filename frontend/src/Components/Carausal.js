import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Smallvideo from "./Smallvideo";
const Vcarousel = () => {
  const [videos, setVideos] = useState([]);
  // const [lessVideos, setLessVideos] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const GetData = async () => {
      const url = `http://localhost:8080/api/videos/all`;

      const res = await axios.get(url, {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      });
      setVideos(res.data.slice(0, 5));
    };

    GetData();
  }, [currentUser]);

  console.log(videos);

  return (
    <div className="view-less">
      {videos.map((video) => (
        <Smallvideo video={video} />
      ))}
    </div>
  );
};
export default Vcarousel;
