import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
// import LoadingPage1 from "./Components/Home";
// import FetchVideo from "./Components/VideoFetch";
// import Nav from "./Components/NavBar";
import Signup from "./Components/signup";
import Login from "./Components/login";
import VideoUpload from "./Components/Vupload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
