import "./home.css";
import { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "../slider/Slider";
import Platform from "../Faq/Platform";
import Homegen from "./Homegen";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="slider-con" data-aos="zoom-in">
        <Slider />
      </div>
      <div className="home-container1">
        <div className="home-box1">
          <img
            data-aos="fade-up"
            src="https://themewagon.github.io/crypto/img/about-img.png"
            alt=""
          />
        </div>
        <div className="home-box1">
          <h1 data-aos="fade-down">Pine-Hub</h1> 
          <p data-aos="fade-up">
            Welcome Pine-Hub - Pine Intelligence AI Trading Technology. Our
            experienced team of asset management professionals offers a proven
            and unique hybrid system that provides a sustainable and low-risk
            income stream. Join us today to safeguard your financial future with
            our cutting-edge automated passive income technology.
          </p>
          <button data-aos="fade-up">Get Started</button>
        </div>
      </div>
      <div className="home-container3">
          <Platform/>
      </div>
      <Homegen/>
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
      <div className="corevalue-mother">
        <div className="corevalue-container1">
          <h1>Pine Values</h1>
          <div className="corevalue-container2">
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Professionalism</h2>
              <p>
                We pride ourselves on providing our clients with the highest
                level of professionalism, from our knowledgeable customer
                support team to our experienced crypto traders. You can expect
                prompt and courteous service, expert results, and a steadfast
                commitment to your financial growth.
              </p>
            </div>
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Transparency</h2>
              <p>
                We adhere to the philosophy of complete openness with each of
                our customers. We make sure that you have access to all of the
                information you need in order to keep track of your
                cryptocurrency earnings and offer you with frequent updates on
                your financial success.
              </p>
            </div>
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Security</h2>
              <p>
                We place a premium on safety, and we use cutting-edge technology
                to do so in order to protect both your development and your
                personal information. You are free to go on with full assurance
                that the safety and protection of your crypto is a top priority
              </p>
            </div>
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Trust</h2>
              <p>
                We believe in establishing trust with our customers by
                communicating in an open and honest manner, providing dependable
                service, and committing ourselves to the economic success of our
                customers. You can rely on us to look out for your well-being at
                all times and to offer you with the finest quality of service
                possible.
              </p>
            </div>
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Flexibility</h2>
              <p>
                We recognize that each individual pursuing financial growth has
                distinct aims and requirements. This is why we present a diverse
                array of tiers to suit your budget. Whether you're starting your
                journey towards financial growth or have considerable
                experience, we have the perfect solution for you.
              </p>
            </div>
            <div data-aos="fade-up" className="core-box">
              <div className="core-line"></div>
              <h2>Innovation</h2>
              <p>
                We are perpetually innovating and enhancing our platform to
                offer our clients the most optimal financial growth experience.
                We are dedicated to remaining at the vanguard of the industry,
                employing the most recent advancements in technology to assist
                you in reaching your financial milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
