import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = () => {
  return (
    <div className="home-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        speed={1000} 
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/60h8YSg/pexels-sora-shimazaki-5673488.jpg" alt="Slide 1" />
          <div className="info">
            <span>Stronger Foundation and Ecosystem.</span>
            <h1>Greater Heights</h1>
            <p>Maximize Your Earnings with Pine-hub – Your Trusted Partner for Secure Earnings.</p>
                  <div className="log">
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/Signup'>CREATE ACCOUNT</Link>
                  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/WD29MsS/pexels-mikael-blomkvist-6476583.jpg" alt="Slide 2" />
          <div className="info">
            <span>We are Pine Finance!</span>
            <h1>Build your Portfolio </h1>
            <p>We are bringing BLUE CHIP opportunities to our members that are generally only accessible by the Global Elite.</p>
                  <div className="log">
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/Signup'>CREATE ACCOUNT</Link>
                  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qmQVfvf/pexels-ivan-samkov-7213196.jpg" alt="Slide 3" />
          <div className="info">
            <span>We are pine Trade, We help ypu.</span>
            <h1>Grow your Portfolio</h1>
            <p>We also provide you access to automatic rebalancing, dividend reinvesting, and tax loss harvesting in order to further boost your returns. Until now, these services were only available to the ultra-rich.</p>
                  <div className="log">
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/Signup'>CREATE ACCOUNT</Link>
                  </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
