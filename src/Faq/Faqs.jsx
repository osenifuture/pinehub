import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const questions = [
    {
      question: "Is Pine-Hub a safe trading platform?",
      answer:
        "Pine-hub Trading Limited controls one of the world's most sophisticated security technology and maintenance teams, and is constantly upgrading our security systems to ensure the safety of user assets and accounts.",
    },
    {
      question: "What is Trading Forex?",
      answer:
        "Forex trading is the buying and selling of currencies on the foreign exchange market. When you trade forex online, you are counting on the value of the currency changing in your favor in the future.",
    },
    {
      question: "What moves the forex market?",
      answer:
        "There are several key factors that move the forex market: interest rate, inflation, economic stability, central banks, and global events.",
    },
    {
      question: "What is commodity Trading?",
      answer:
        "Commodity trading is buying and selling of raw materials such as precious metals and oil, that are important to the global economy.",
    },
    {
      question: "How does CFDs work?",
      answer:
        "Contract for Difference (CFD) is a popular format for online trading. Its main feature is the ability to profit from price movements of the underlying instrument in any direction. In this case, you do not need to own this asset physically.",
    },
    {
      question: "What about Privacy policy?",
      answer:
        "A privacy policy outlines how personal information is collected, used, and protected by a company or website. It informs users about data handling practices, their rights, and security measures.",
    },
  ];

  return (
    <div className="faq-box">
      {questions.map((item, index) => (
        <div className="box" data-aos="fade-down" key={index}>
          <span>
            <i className="fa-regular fa-circle-question"></i>
            <p>{item.question}</p>
          </span>
          <div className="answer-box">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;

