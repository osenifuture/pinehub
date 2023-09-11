import "./Service.css";
import { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Faq from "../Faq/Faqs";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
       <div className="faq-mother">
        <h1 data-aos="fade-down">FAQS</h1>
            <Faq/>
      </div>
    
    </Fragment>
  );
};

export default Service;
