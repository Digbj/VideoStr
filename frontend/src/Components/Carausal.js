<<<<<<< HEAD
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const Vcarousel=()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
         <div className="cra">
        <Carousel responsive={responsive}>
            <div>
                <img className="Cimg" src="https://images.indianexpress.com/2020/03/RRR-Motion-Poster-759.jpg" alt="img1"/>
                    
            </div>
            <div>
            <img className="Cimg" src="https://www.themoviedb.org/t/p/original/tdQzRSk4PXX6hzjLcQWHafYtZTI.jpg" alt="img2"/>
            
                    
            </div>
            <div>
            <img className="Cimg" src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg?impolicy=abp_cdn&imwidth=720" alt="img3"/>
           
            
                    
            </div>
            <div>
            <img className="Cimg" src="https://media-cache.cinematerial.com/p/500x/zqbh2w6s/prey-movie-poster.jpg?v=1658509864" alt="img4"/>
            
            </div>
            <div>
            <img className="Cimg" src="https://www.filmibeat.com/ph-big/2022/07/ghost_165760618910.jpg" alt="img5"/>
            
            </div>
            <div>
            <img className="Cimg" src="https://filmfare.wwmindia.com/content/2022/jun/jawaan41654408101.jpg" alt="img6"/>
           
            </div>
        </Carousel>
        </div>
        </>
    )
}
export default Vcarousel;
=======
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
>>>>>>> bd40105f718d88e45b59dc18cef655daf456a9ab
