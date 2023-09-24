import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/Signup";
import Footer from "./footer/footer";
// import NotFound from "./Route/NotFound";
import Home from "./Route/Home";
import Service from "./Route/Service";
import About from "./Route/About";
import Contact from "./Route/Contact";
import Navbar from "./nav/Navbar";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Route/Profile";
import Term from "./Faq/Term";
import Affiliate from "./Route/Affiliate";
import Disclaimer from "./Route/Disclaimer";
import Cookies from "./Route/Cookies";
import Investment from "./Route/Investment";
import Certification from "./Route/Certification";
import Agreement from "./footer/Agreement";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import SideNavBar from "./auth/SidenavBar";
import SideNavHome from "./Route/SideNavHome";
import Withdraw from "./Route/Withdraw";
import Invest from "./Route/Invest";
import UpgradeAccount from "./Route/UpgradeAccount";
import Setting from "./Route/Setting";


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!isLoggedIn) {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Investment" element={<Investment />} />
            <Route path="/Term" element={<Term />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
            <Route path="/Cookies" element={<Cookies />} />
            <Route path="/Agreement" element={<Agreement />} />
            <Route path="/Affiliate" element={<Affiliate />} />
            <Route path="/Certification" element={<Certification />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<SideNavBar />}>
      <Route index element={<SideNavHome />} />
      <Route path="/UpgradeAccount" element={<UpgradeAccount />} />
      <Route path="/Withdraw" element={<Withdraw/>} />
      <Route path="/Setting" element={<Setting/>} />
      <Route path="/Invest" element={<Invest/>} />
        
      </Route>
    </Routes>
  );
}

export default App;
