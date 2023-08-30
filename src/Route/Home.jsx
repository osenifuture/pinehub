import "./home.css";
import { Fragment, useEffect } from "react";
import Faq from "../Faq/Faqs";
import TopCryptocurrencies from "../Price/BitcoinPrice";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

const Home = () => {
  const naviagte = useNavigate()
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <Fragment>
      <div className="home-mother">
        <div className="home-box" >
          <h1  data-aos="fade-down">Make Better Life With Trusted CryptoCoin</h1>
          <p  data-aos="fade-up">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button data-aos="fade-up-left" onClick={() => naviagte('/Login')}>Exploy More</button>
        </div>
        <div className="home-box">
          <div className="homebox-card">
            <img  data-aos="fade-down"
              src="https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/hero-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="home-container1">
        <div className="home-box1">
          <img data-aos="fade-up-left"
            src="https://themewagon.github.io/crypto/img/about-img.png"
            alt=""
          />
        </div>
        <div className="home-box1">
          <h1  data-aos="fade-down" >What is Bitcoin</h1>
          <h3 data-aos="fade-up-right">
            Bitcoin is an innovative payment network and a new kind of money.
          </h3>
          <p>
            Bitcoin is one of the most important inventions in all of human
            history. For the first time ever, anyone can send or receive any
            amount of money with anyone else, anywhere on the planet,
            conveniently and without restriction. It’s the dawn of a better,
            more free world.
          </p>
        <button  data-aos="fade-up">Get Started</button>
        </div>
      </div>
      <div className="home-container2">
        <span>
        <h1>Our Investment Plans</h1>
        </span>
        <div className="homecontainer2-inner">
            <div className="home-box2">
            <i className="fa-solid fa-cube"></i>
                <span>
                <h3>Tier-1</h3>
                <p>6% return on investment after 3 days</p>
                <p>Maximum deposit = $500</p>
                <p>Minimum deposit = $14,999</p>
                </span>
            </div>
            <div className="home-box2">
            <i class="fa-solid fa-coins"></i>
                <span>
                <h3>Tier-2</h3>
                <p>28% return on investment after 7 days</p>
                <p>Maximum deposit = $15,000</p>
                <p>Minimum deposit = $79,999</p>
                </span>
            </div>
            <div className="home-box2">
            <i class="fa-solid fa-layer-group"></i>
                <span>
                <h3>Tier-3</h3>
                <p>6% return on investment after 3 days</p>
                <p>Maximum deposit = $80,000</p>
                <p>Minimum deposit = $2,500,000</p>
                </span>
            </div>
        </div>
      </div>
      <div className="topcrypto">
      <TopCryptocurrencies/>
      </div>
      <div className="faq-mother">
        <h1>FAQS</h1>
            <Faq/>
      </div>
    </Fragment>
  );
};

export default Home;
