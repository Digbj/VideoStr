import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Vcarousel from "./Carausal";
import Smallvideo from "./Smallvideo";
const FetchVideo = () => {
  const [viewAll, setviewAll] = useState(false);
  const [videos, setVideos] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const GetData = () => {
    // const key = '541e4e6113f4a245be41d653a35850a6'
    const url = `http://localhost:8080/api/videos/all`;
    const getPic = () => {
      axios
        .get(url, {
          headers: {
            token: "Bearer " + currentUser.accessToken,
          },
        })
        .then((res) => setVideos(Object.values(res.data)))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
      // console.log(videos);
      // console.log(currentUser.accessToken)
    };
    getPic();
  };

  useEffect(() => {
    GetData();
  });

  console.log(videos);

  return (
    <>
      <div className="util">
        {<button>Recent</button>}
        {viewAll ? (
          <button
            onClick={() => {
              setviewAll(false);
            }}
          >
            View Less
          </button>
        ) : (
          <button
            onClick={() => {
              setviewAll(true);
            }}
          >
            View All
          </button>
        )}
      </div>
      <div>
        {viewAll ? (
          <div className="view-more">
            {videos.map((video) => (
              <Smallvideo video={video} />
            ))}
          </div>
        ) : (
          <Vcarousel />
        )}
      </div>
    </>
  );
};
export default FetchVideo;
