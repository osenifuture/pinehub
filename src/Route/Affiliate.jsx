import { Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./Affiliate.css";

const Affiliate = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <Fragment>
    <div className="affiliate-container1">
      <div  data-aos="zoom-in" className="affiliate-inner">
        <h2  data-aos="fade-down">BECOME AN AFFILIATE </h2>
        <p>
          Join an affiliate Network that pays out more than $2millions dollars
          per year
        </p>
        <Link  data-aos="fade-up" to='/Signup' className="affiliate-link">BECOME A PARTNER</Link>
      </div>
    </div>
    <div className="affiliate-container2">
    <div data-aos="fade-down" className="affiliate-box">
        <img src="https://images.pexels.com/photos/5849564/pexels-photo-5849564.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <h2>High Commmission</h2>
        <p>Earn up to 5% Referral Commission on your  referral deposit</p>
    </div>
    <div data-aos="fade-up" className="affiliate-box">
        <img src="https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <h2>Instant Payouts</h2>
        <p>Receive your earnings instantly to your chosen payment wallet</p>

    </div>
    <div data-aos="fade-down" className="affiliate-box">
        <img src="https://img.freepik.com/free-psd/twitter-icon-3d-rendering-isolated_47987-11878.jpg?w=360" alt="" />
        <h2>Social Promote</h2>
        <p>We provide you with personal referral links that you can share on all social platforms</p>
    </div>
    </div>
    <div className="affiliate-container3">
        <h1>How Our Afiliate Program Works</h1>
        <p>Our affiliate program is simple  and straight forward follow these easy steps:</p>
        <div className="affiliate-container4">
        <div  data-aos="fade-down" className="affiliate-box1">
            <h2>Step 1: Sign up</h2>
            <p>Register on our website and become a partner and member of our community </p>
        </div>
        <div data-aos="fade-up" className="affiliate-box1">
            <h2>Step 2: Get your Referral Link</h2>
            <p>After logging in, you will find your unique referral link in your account. Overview</p>
        </div>
        <div data-aos="fade-down" className="affiliate-box1">
            <h2>Step 3: Promote</h2>
            <p>Share your referral link on your website,social media, or with your friends</p>
        </div>
        <div data-aos="fade-up" className="affiliate-box1">
            <h2>Step 4: Earn Commission</h2>
            <p>Earn up to 5% commission every time your referral invest in any package.Instant payouts to your preferred payment wallet </p>
        </div>
        </div>
        <h1>Ready to join our Affiliate Program?</h1>
        <Link  data-aos="zoom-in" to='/Signup' className="affiliate-link">BECOME A PARTNER NOW</Link>
    </div>
    </Fragment>
  );
};

export default Affiliate;
