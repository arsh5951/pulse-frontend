import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./Pages/Artist";
import Artistdetail from "./Pages/Artistdetail";
import Browse from "./Pages/Browse";
import Chart from "./Pages/Chart";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Player from "./Pages/Player";
import Profile from "./Pages/Profile";
import Rtl from "./Pages/Rtl";
import Forgotpassword from "./Pages/auth/Forgotpassword";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import {Toaster} from 'react-hot-toast'

function App() {


  return (
    <>
      <div className="app dk" id="app">
        <div id="content" className="app-content" role="main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Artist" element={<Artist />} />
              <Route path="/Artistdetail" element={<Artistdetail />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/Chart" element={<Chart />} />
              <Route path="/Player" element={<Player />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Rtl" element={<Rtl />} />
              <Route path="/Forgotpassword" element={<Forgotpassword />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    </>
  )
}

export default App
