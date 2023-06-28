import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Sign from "./components/Sign";

function App() {
  return (
    <Router>
      <Header />
         <Routes>
               <Route path="/" element={<Home />}/>
         </Routes>
         <Routes>
               <Route path="/videos" element={<Videos />}/>
         </Routes>
         <Routes>
               <Route path="/upload" element={<Upload />}/>
         </Routes>
         <Routes>
               <Route path="/login" element={<Login />}/>
         </Routes>
         <Routes>
               <Route path="/signup" element={<Sign/>}/>
         </Routes>
         <Footer />
        </Router>
  );
}

export default App;
