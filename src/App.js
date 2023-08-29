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

function App() {
  return (
    <Fragment>
    <Routes>
      <Route path="/" element= {<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    <Footer/>
    </Fragment>
  );
}

export default App;
