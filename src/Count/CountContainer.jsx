import React, { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import Aos from 'aos';
import "aos/dist/aos.css"

const CountUp1 = () => {
   useCountUp({ ref: 'counter1', start: 50, end: 5000 });
    return <span id="counter1" />;
};

const CountUp2 = () => {

    useCountUp({ ref: 'counter2', start: 100, end: 50000});
    return <span id="counter2" />;
};

const CountUp3 = () => {
    useCountUp({ ref: 'counter3', start: 200, end: 500000 });
    return <span id="counter3" />;
};

const CountContainer = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    return (
        <div className="count-container">
            <div className="count-box" data-aos="fade-down"> 
            <i className="fa-solid fa-arrow-up-wide-short"></i>
                <h1> <CountUp1 /></h1>
                <h2>Daily Transaction</h2>
            </div>
            <div className="count-box" data-aos="fade-up">
            <i class="fa-solid fa-signal"></i>
                <h1><CountUp2 /></h1>
                <h2>Monthly Transaction</h2>
            </div>
            <div className="count-box" data-aos="fade-down">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
                <h1><CountUp3 /></h1>
                <h2>Total Transaction</h2>
            </div>
        </div>
    );
};

export default CountContainer;
