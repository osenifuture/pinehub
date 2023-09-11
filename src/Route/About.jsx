import { Link } from "react-router-dom";
import "./About.css";
import { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import CountContainer from "../Count/CountContainer";
import OurService from "../Count/OurService";

const About = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <>
    
    <Fragment>

    <div className="about-container">
     <span>   
        <h1 data-aos="fade-down">
          Pine-Hub is committed to providing steady gains and unparalleled
          customer service through our team of highly experienced crypto
          experts. Our advanced trading software, CloudIntelligence, utilizes
          top-tier algorithms to enhance your growth potential and
          profitability. Experience the forefront of professional cryptocurrency
          growth with <Link to='/' className="pine">Pine-Hub</Link> today.
        </h1>
        </span>
        <span>
             <div className="about-box">
          <div className="line"></div>
          <h2 data-aos="fade-up">
            Revolutionizing Crypto Growth: Advanced Trading with Proven Success.
            </h2>
            <p data-aos="fade-down">
              Our state-of-the-art cryptocurrency growth platform is expertly
              crafted and overseen by a team of experienced trading experts. Our
              cutting-edge trading bot, Pine-Hub Intelligence, utilizes
              state-of-the-art algorithms and data analysis to deliver unmatched
              precision and profitability. Our growth platform offers a low
              minimum withdrawal amount of $25, enabling efficient management of
              your gains and optimal return maximization. Experience the future
              of secure and reliable crypto growth by joining our company today
            </p>
         </div>
         
         <div className="about-box">

          <div className="line"></div>
          <h2 data-aos="fade-up">
            Growth in Cryptocurrency Based on Proven Experience: Global Trust
            and Results
          </h2>
          <p data-aos="fade-up">
            Our system has years of experience in cryptocurrency growth, and we
            have helped a large number of clients all around the world improve
            their financial holdings by using our services. Our cutting-edge
            growth plans are custom-designed to maximize your profits while
            minimizing the risk of any possible losses. Joining us now will
            allow you to take advantage of our tried-and-true strategy to grow
            your assets in cryptocurrency markets.
          </p>
      </div>
        </span>
    </div>
   
    </Fragment>
    <Fragment>
    <div className="service-central">
      <OurService />
      <div className="service-mother">
        <div className="features-box">
          <h1 data-aos="fade-down">Our Features</h1>
          <p data-aos="fade-down">
            Bitcoin is the simplest way to exchange money at very low cost.
          </p>
        </div>
        <div className="service-container1">
          <div data-aos="fade-up" className="service-box">
            <i className="fa-solid fa-earth-asia"></i>
            <span>
              <h3>Website</h3>
              <p>
                A digital platform providing information, news, and services
                related to cryptocurrencies, blockchain technology, and
                decentralized finance (DeFi).
              </p>
            </span>
          </div>
          <div data-aos="fade-up" className="service-box">
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
          <div data-aos="fade-down" className="service-box">
            <i className="fa-solid fa-wallet"></i>
            <span>
              <h3>Wallets</h3>
              <p>
                Crypto wallets store private keys and enable cryptocurrency
                transactions securely on blockchain networks.
              </p>
            </span>
          </div>
          <div data-aos="fade-up" className="service-box">
            <i className="fa-solid fa-headphones"></i>
            <span>
              <h3>Expert Support</h3>
              <p>
                Proficient guidance and assistance provided by knowledgeable
                individuals to aid and educate the crypto community.
              </p>
            </span>
          </div>
          <div data-aos="fade-down" className="service-box">
            <i class="fa-solid fa-rotate"></i>
            <span>
              <h3>Instant Exchange</h3>
              <p>
                Instant exchange facilitates swift and seamless conversion of
                one cryptocurrency to another, enhancing liquidity and user
                convenience.
              </p>
            </span>
          </div>
          <div data-aos="fade-up" className="service-box">
            <i class="fa-solid fa-sliders"></i>
            <span>
              <h3>Recuring Buys</h3>
              <p>
                Recurring buy involves automatic, scheduled purchases of
                cryptocurrencies at set intervals, promoting consistent
                investment and long-term growth in the crypto community.
              </p>
            </span>
          </div>
        </div>
      </div>
      <CountContainer />
    </div>
  </Fragment>
  </>
  );
};

export default About;
