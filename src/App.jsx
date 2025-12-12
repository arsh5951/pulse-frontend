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
import Chart2 from "./Pages/rtl/Chart2";
import Browse2 from "./Pages/rtl/Browse2";
import Artist2 from "./Pages/rtl/Artist2";
import Profile2 from "./Pages/rtl/Profile2";
import Chart3 from "./Pages/webApp/Chart3";
import Browse3 from "./Pages/webApp/Browse3";
import Artist3 from "./Pages/webApp/Artist3";
import Profile3 from "./Pages/webApp/Profile3";
import { Toaster } from 'react-hot-toast';
import AppLayout from "./layouts/AppLayout";

function App() {


  return (
    <>
      <div className="app dk" id="app">
        <div id="content" className="app-content" role="main">
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Index />} />
              <Route path="/Forgotpassword" element={<Forgotpassword />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />

              <Route path="/" element={<AppLayout />}>

                <Route path="/Home" element={<Home />} />
                <Route path="/Artist" element={<Artist />} />
                <Route path="/Artistdetail" element={<Artistdetail />} />
                <Route path="/Browse" element={<Browse />} />
                <Route path="/Chart" element={<Chart />} />
                <Route path="/Player" element={<Player />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Rtl" element={<Rtl />} />
                <Route path="/Browse2" element={<Browse2 />} />
                <Route path="/Chart2" element={<Chart2 />} />
                <Route path="/Artist2" element={<Artist2 />} />
                <Route path="/Profile2" element={<Profile2 />} />
                <Route path="/Browse3" element={<Browse3 />} />
                <Route path="/Chart3" element={<Chart3 />} />
                <Route path="/Artist3" element={<Artist3 />} />
                <Route path="/Profile3" element={<Profile3 />} />

              </Route>

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

export default App;