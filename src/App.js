import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Create from "./Create";
import Blogdetails from "./Blogdetails";
import NotFound from "./notfound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/blog/:id" element={<Blogdetails/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
