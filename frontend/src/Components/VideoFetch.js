import React, { useEffect ,useState} from "react";
import axios from 'axios';
const FetchVideo=()=> {
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
      <div className="Fetch-container">
       <div className="util">
        <p>Recent</p>
        <p>View All</p>
       </div>
       <div className="Vid">
        {photos.map((task,index)=>{
            return(
                <div key={index} className='F-img'>
                    <img className='F-images' key={task.id} src={`https://live.staticflickr.com/${task.server}/${task.id}_${task.secret}_m.jpg`} alt={task.title} />
                </div>
            )
        })}
       </div>
      </div>
    );
  }
  export default FetchVideo;



  /** <div className="morethings">
          <a href="/" className="recent">
            Recent
          </a>
          <a href="/" className="viewall">
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
        </div> */