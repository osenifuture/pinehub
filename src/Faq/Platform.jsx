import {  useState, useEffect } from "react";
import { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Platform = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);

    const handleToggle1 = () => {
           setIsOpen1(true)
            setIsOpen2(false);
    };
    const handleToggle2 = () => {
        setIsOpen2(true)
        setIsOpen1(false)
    };
    return(
        
        <div className="platform-container">
            <div className="platform-box1" >
            <span data-aos="fade-down"  onClick={handleToggle1}>
              <h2>How to Start</h2>
            <button></button>
            </span>
           <span data-aos="fade-up" onClick={handleToggle2}>
            <h2>Platform Highlight</h2>
           <button ></button>
           </span>
            </div>
            {
                isOpen1 && (
                    <Fragment>
                        <div className="platform-box2" data-aos="flip-up">
                    <div className="box" data-aos="fade-down">
                    <i className="fa-solid fa-person-circle-plus"></i>
                        <h3>Register with refrral link and ccreate account.</h3>
                    </div>
                    <div className="box" data-aos="fade-up">
                    <i class="fa-regular fa-hand-pointer"></i>
                        <h3>Choose your budget to maximise your gains.</h3>
                    </div>
                    <div className="box" data-aos="fade-down">
                    <i class="fa-brands fa-cc-amazon-pay"></i>
                        <h3>Deposit up to 20 differnt crypro qasset to get started.</h3>
                    </div>
                    <div className="box" data-aos="fade-up">
                    <i class="fa-solid fa-seedling"></i>
                        <h3>Begin earning daily profits within 24hours in our Pine platform.</h3>
                    </div>
                    <div className="box" data-aos="fade-down">
                    <i className="fa-solid fa-sack-dollar"></i>
                        <h3>Instant daily withdrawal available at any time.</h3>
                    </div>
                        </div>
                   
                </Fragment>
                    )}

                {
                      isOpen2 && (
                        <>
                        <div className="platform-box2" data-aos="flip-up">
                    <div className="box" data-aos="fade-down">
                    <i class="fa-solid fa-shield-cat"></i>
                        <h3>Secure and reliable platform for enhancing your cryptocurrency growth.</h3>
                    </div>
                    <div className="box" data-aos="fade-up">
                    <i class="fa-solid fa-seedling"></i>
                        <h3>Up to 1.25% daily eanings with effortless gains.</h3>
                    </div>
                    <div className="box" data-aos="fade-down">
                    <i class="fa-solid fa-house-signal"></i>
                        <h3>Cutting edge security measures to safe guard your cryptocurrency growth.</h3>
                    </div>
                    <div className="box" data-aos="fade-up">
                    <i className="fa-solid fa-users-gear"></i>
                        <h3>Experience team of proffessional dedicated to your success.</h3>
                    </div>
                    <div className="box" data-aos="fade-down">
                    <i class="fa-brands fa-bitcoin"></i>
                        <h3>Flexible and easy-to-use with instant withdrawals.</h3>
                    </div>
                        </div>
                        </>
                    )}
        </div>
    )

};

export default Platform;