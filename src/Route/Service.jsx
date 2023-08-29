import { Link } from "react-router-dom";
import "./Service.css";
import { Fragment } from "react";
import CountContainer from "../Count/CountContainer";
import OurService from "../Count/OurService";

const Service = () => {
  return (
    <Fragment>
        <div className="service-container3">
            <div className="service-box3">
                <h1>Services</h1>
                <span>
                <Link to='/' className="service-link">Home</Link>/
                <Link to='/Login'  className="service-link">Login</Link>/
                <h4>service</h4>
                </span>
                </div>  
                <div className="service-box3">
                    <div className="box3-card">
                <img src="https://i.ibb.co/Wybh7fP/pexels-karolina-grabowska-5980582-removebg-preview.png" alt="" />
                    </div>
                    </div>  
        </div>
        <OurService/>
    <div className="service-mother">
        <div className="features-box">
            <h1>Our Features</h1>
            <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="service-container1">

      <div className="service-box">
        <i className="fa-solid fa-earth-asia"></i>
        <span>
          <h3>Website</h3>
          <p>
            A digital platform providing information, news, and services related
            to cryptocurrencies, blockchain technology, and decentralized
            finance (DeFi).
          </p>
        </span>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-shield-halved"></i>
        <span>
          <h3>Safe and Secure</h3>
          <p>
            A trustworthy crypto website implements robust encryption,
            two-factor authentication, regular security audits, and user
            education to ensure data and financial safety.
          </p>
        </span>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-wallet"></i>
        <span>
          <h3>Wallets</h3>
          <p>
            Crypto wallets store private keys and enable cryptocurrency
            transactions securely on blockchain networks.
          </p>
        </span>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-headphones"></i>
        <span>
          <h3>Expert Support</h3>
          <p>
            Proficient guidance and assistance provided by knowledgeable
            individuals to aid and educate the crypto community.
          </p>
        </span>
      </div>
      <div className="service-box">
        <i class="fa-solid fa-rotate"></i>
        <span>
          <h3>Instant Exchange</h3>
          <p>
            Instant exchange facilitates swift and seamless conversion of one
            cryptocurrency to another, enhancing liquidity and user convenience.
          </p>
        </span>
      </div>
      <div className="service-box">
        <i class="fa-solid fa-sliders"></i>
        <span>
          <h3>Recuring Buys</h3>
          <p>
            Recurring buy involves automatic, scheduled purchases of
            cryptocurrencies at set intervals, promoting consistent investment
            and long-term growth in the crypto community.
          </p>
        </span>
      </div>
        </div>
    </div>
    <CountContainer/>
 </Fragment>
  );
};

export default Service;
