import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Smallvideo from "./Smallvideo";
import Nav from "./NavBar";
// import SearchPage from "./SearchPage";
import { Link } from "react-router-dom";

const MyVid = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [myvid, setMyvid] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getMyVideos = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/videos/get/${currentUser._id}`,
        {
          headers: {
            token: "Bearer " + currentUser.accessToken,
          },
        }
      );
      setMyvid(res.data);
      setCurrentVideo(res.data[0]);
    };

    const getSearchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/videos/search?title=${searchQuery}`
      );
      setVideos(res.data);
    };
    if (searchQuery !== "") {
      getSearchData();
    }

    getMyVideos();
  }, [currentUser, searchQuery]);

  const updateClick = async () => {
    setIsSaving(true);
    const res = await axios.put(
      `http://localhost:8080/api/videos/update/${currentVideo._id}`,
      currentVideo,
      {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      }
    );
    setIsSaving(false);
    setCurrentVideo(res.data);
  };

  const deleteClick = async () => {
    setIsDeleting(true);
    const res = await axios.delete(
      `http://localhost:8080/api/videos/delete/${currentVideo._id}`,
      {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      }
    );
    setIsDeleting(false);
    if (res.data) {
      const getMyVideos = async () => {
        const res = await axios.get(
          `http://localhost:8080/api/videos/get/${currentUser._id}`,
          {
            headers: {
              token: "Bearer " + currentUser.accessToken,
            },
          }
        );
        setMyvid(res.data);
        setCurrentVideo(res.data[0]);
      };
      getMyVideos();
    }
  };

  console.log(videos);

  return (
    <>
      <Nav setSearchQuery={setSearchQuery} />
      {searchQuery === "" ? (
        <div className="my-vid">
          <div className="left">
            <div className="my-videos">
              {myvid.map((video) => (
                <div
                  className="my-video"
                  onClick={() => setCurrentVideo(video)}
                >
                  <Smallvideo video={video} />
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <video src={currentVideo.videoUrl} />
            <div className="my-video-data">
              <input
                type="text"
                value={currentVideo.title}
                className="my-video-title"
                onChange={(e) =>
                  setCurrentVideo({ ...currentVideo, title: e.target.value })
                }
              />
              <div className="my-video-information">
                <p>14 Jan, 2023</p>
                <p>14 Mins</p>
                <p>200 views</p>
              </div>
            </div>
            <div className="my-video-description">
              <p>Description</p>
              <textarea
                value={currentVideo.description}
                onChange={(e) =>
                  setCurrentVideo({
                    ...currentVideo,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="my-video-buttons">
              <button
                className="deleteBtn"
                onClick={deleteClick}
                disabled={isDeleting}
              >
                Delete
              </button>
              <button
                className="saveBtn"
                onClick={updateClick}
                disabled={isSaving}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="search-page">
          <div className="searched-video">
            {videos.map((video) => (
              <Link to="/play-video" state={{ movieData: video }}>
                <Smallvideo video={video} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyVid;
