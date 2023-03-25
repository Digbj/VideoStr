import React from "react";
import { useState } from "react";
const VideoUpload = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
    }


  return (
    <>
    {isOpen&&(
    <div className="V-container">
      
 <div className="V-container2">
 <div className="V-Title">
   <p>Upload New Video</p>
   <button onClick={handleClose}>X</button>
 </div>
 <div className="drag-drop"
  onDragOver={dragOver}
  onDragEnter={dragEnter}
  onDragLeave={dragLeave}
  onDrop={fileDrop}
 >
    <img className="dd-image" src="https://icon-library.com/images/cloud-upload-icon/cloud-upload-icon-11.jpg" alt="pic"/>
    <p>Drag and drop to upload</p>
     <input className="F-inp" type='file'/>
     <p id="p2">or Click here to browse a file</p>
 </div>

 <div className="abc">
   <p>Name</p>
   <input />
   <textarea placeholder="Description" />
 </div>

 <div className="category">
   <div>
     <p htmlFor='vid'>Category</p>
     <select name="vid" id="drop">
       <option value="long">Long</option>
       <option value="Short">Short</option>
       <option value="Medium">Medium</option>
     </select>
   </div>
   <div>
     <p htmlFor='vis'>Visibility</p>
     <select name="vis" id="drop">
       <option value="Public">Public</option>
       <option value="Private">Private</option>
     </select>
   </div>
   <div>
     <p htmlFor='others1'>Others</p>
     <select name="others1" id="drop">
       <option value="Public">Public</option>
       <option value="Private">Private</option>
     </select>
   </div>
   <div>
     <p htmlFor='others2'>Others2</p>
     <select name="others2" id="drop">
       <option value="Public">Public</option>
       <option value="Private">Private</option>
     </select>
   </div>
 </div>
 <button className="Save">Save</button>
</div>
</div>
)}
     
 </> 
  );
};
export default VideoUpload;
