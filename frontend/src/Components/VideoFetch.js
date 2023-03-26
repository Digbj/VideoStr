import React, { useEffect ,useState} from "react";
import axios from 'axios';
import Vcarousel from "./Carausal";
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
   
    useEffect(()=>{
      setinp("")
    },[])
   
    
   
    return (
      <div className="Fetch-container">
       <div className="util">
        <p>Recent</p>
        <button onClick={GetData}>View All</button>
       </div>
       <Vcarousel/>
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



  