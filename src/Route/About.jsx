import { Link } from "react-router-dom";
import "./About.css";
import { Fragment } from "react";
import Faq from "../Faq/Faqs";

const About = () => {
  return (
    <Fragment>

    <div className="about-container">
     <span>   
        <h1>
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
          <h2>
            Revolutionizing Crypto Growth: Advanced Trading with Proven Success.
            </h2>
            <p>
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
          <h2>
            Growth in Cryptocurrency Based on Proven Experience: Global Trust
            and Results
          </h2>
          <p>
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
    <div className="faq-mother">
        <h1>FAQS</h1>
            <Faq/>
      </div>
    
    </Fragment>
  );
};

export default About;
