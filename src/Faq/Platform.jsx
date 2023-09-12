import React, { useEffect } from "react"; // Added React import
import Aos from "aos";
import "aos/dist/aos.css";

const Platform = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="platform-container">
      <div className="platform-box1">
          <h2 data-aos="fade-down">How to Start</h2>
      </div>

      <div className="platform-box2" data-aos="flip-up">
        <div className="box" data-aos="fade-down">
        <i className="fa-solid fa-person-circle-plus"></i>
          <h3>Register an account with all required details correctly</h3>
        </div>
        <div className="box" data-aos="fade-up">
        <i class="fa-regular fa-hand-pointer"></i> 
          <h3>Choose a plan to maximize your earnings</h3>
        </div>
        <div className="box" data-aos="fade-down">
        <i class="fa-brands fa-cc-amazon-pay"></i>
          <h3>Make your deposit and get started</h3>
        </div>
        <div className="box" data-aos="fade-up">
        <i class="fa-solid fa-seedling"></i>
          <h3>Begin accumulating profits daily until assured target profit has been reached</h3>
        </div>
        <div className="box" data-aos="fade-down">
        <i className="fa-solid fa-sack-dollar"></i>
          <h3>Both capital and profit earned will be available in account after the duration</h3>
        </div>
      </div>

     
        <div className="platform-box1">
        <h2 data-aos="fade-down">Platform Highlight</h2>
      </div>

      <div className="platform-box2" data-aos="flip-up">
        <div className="box" data-aos="fade-down">
        <i class="fa-solid fa-shield-cat"></i> 
          <h3>Secure and reliable platform for enhancing your asset growth.</h3>
        </div>
        <div className="box" data-aos="fade-up">
        <i class="fa-solid fa-seedling"></i>
          <h3>Assured earnings on all investments effortlessly</h3>
        </div>
        <div className="box" data-aos="fade-down">
        <i class="fa-solid fa-house-signal"></i>
          <h3>Cutting-edge security measures to safeguard your assets and their growth.</h3>
        </div>
        <div className="box" data-aos="fade-up">
        <i className="fa-solid fa-users-gear"></i>
          <h3>Experienced team of professionals dedicated to your success.</h3>
        </div>
        <div className="box" data-aos="fade-down">
        <i class="fa-brands fa-bitcoin"></i>
          <h3>Flexible and easy-to-use with instant withdrawals.</h3>
        </div>
      </div>
    </div>
  );
};

export default Platform;
