<<<<<<< HEAD
import React, { useEffect ,useState} from "react";
import axios from 'axios';
import Vcarousel from "./Carausal";
const FetchVideo=()=> {
    const [viewAll,setviewAll]=useState(true)
    const [photos, setPhotos] = useState([])
    const [inp,setinp]=useState('river')
    const GetData=()=>{
        const key = '541e4e6113f4a245be41d653a35850a6'
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${inp}&per_page=24&format=json&nojsoncallback=1`
        const getPic = () => {
            axios.get(url)
                .then((res) => setPhotos(Object.values(res.data.photos.photo)))
                .catch((err) => { console.log(err) })
                .finally(() => { })
            // console.log(input,cate);
            
        }
        getPic()
    }
   GetData();
    useEffect(()=>{
      setinp("")
    },[])
   
    
   
    return (
      <>
      <div className="util">
        {<button>Recent</button>}
        {viewAll?<button onClick={()=>{setviewAll(false)}}>View Less</button>:<button onClick={()=>{setviewAll(true)}}>View All</button>}
       </div>
       <div>
        {viewAll?(
          <div className="Vid">
          {photos.map((task,index)=>{
              return(
                  <div key={index} className='F-img'>
                      <img className='F-images' key={task.id} src={`https://live.staticflickr.com/${task.server}/${task.id}_${task.secret}_m.jpg`} alt={task.title} />
                  </div>
              )
          })}
         </div>
        ):<Vcarousel/>}
       </div>
      </>
     
    );
  }
  export default FetchVideo;
=======
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
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab

  console.log(videos);

<<<<<<< HEAD

  
    
  
=======
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
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
