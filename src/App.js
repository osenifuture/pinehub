import {Routes, Route} from "react-router-dom"
import LogIn from "./auth/LogIn";
import SignUp from "./auth/Signup";
import Footer from "./footer/footer";
import NotFound from "./Route/NotFound";
import Home from "./Route/Home";
import Service from "./Route/Service";
import About from "./Route/About";
import Contact from "./Route/Contact";
import Navbar from "./nav/Navbar";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./Route/Profile";
import Term from "./Faq/Term";
import Affiliate from "./Route/Affiliate";



function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  return (
    <Fragment>
    <Routes>
      <Route path="/" element= {<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Term" element={<Term/>}/>
        <Route path="/Affiliate" element={<Affiliate/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    <Footer/>
    </Fragment>
  );
}

export default App;
