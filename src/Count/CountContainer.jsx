import React from 'react';
import { useCountUp } from 'react-countup';

const CountUp1 = () => {
    useCountUp({ ref: 'counter1', start: 1, end: 500 });
    return <span id="counter1" />;
};

const CountUp2 = () => {
    useCountUp({ ref: 'counter2', start: 15, end: 5000});
    return <span id="counter2" />;
};

const CountUp3 = () => {
    useCountUp({ ref: 'counter3', start: 5, end: 500000 });
    return <span id="counter3" />;
};

const CountContainer = () => {
    return (
        <div className="count-container">
            <div className="count-box">
            <i className="fa-solid fa-arrow-up-wide-short"></i>
                <h1> <CountUp1 /></h1>
                <h2>Daily Transaction</h2>
            </div>
            <div className="count-box">
            <i class="fa-solid fa-signal"></i>
                <h1><CountUp2 /></h1>
                <h2>Monthly Transaction</h2>
            </div>
            <div className="count-box">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
                <h1><CountUp3 /></h1>
                <h2>Total Transaction</h2>
            </div>
        </div>
    );
};

export default CountContainer;
