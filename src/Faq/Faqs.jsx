import { useState } from "react";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);


  const handleToggle1 = () => {
    setIsOpen1((prevOpen) => !prevOpen);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  
  };
  const handleToggle2 = () => {
    setIsOpen2((prevOpen) => !prevOpen);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);

  };
  const handleToggle3 = () => {
    setIsOpen3((prevOpen) => !prevOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  
  };
  const handleToggle4 = () => {
    setIsOpen4((prevOpen) => !prevOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const handleToggle5 = () => {
    setIsOpen5((prevOpen) => !prevOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(false);

  };
  const handleToggle6 = () => {
    setIsOpen6((prevOpen) => !prevOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  
  };
 

  return (
    <div className="faq-box">
      <div className="box">
        <span onClick={handleToggle1}>
          <i class="fa-regular fa-circle-question"></i>
          <p>Is Pine-Hub a safe trading platform? </p>
          {isOpen1 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen1 && (
          <div className="answer-box">
            <p>
              Pine-hub Trading Limited controls one of the world's most
              sophiscated security technology and maintenance team , and is
              constantly upgrading our security systems to ensure the safety of
              user assets and accoiunts.
            </p>
          </div>
        )}
      </div>

      <div className="box">
        <span onClick={handleToggle2}>
          <i class="fa-regular fa-circle-question"></i>
          <p> What is the Trading Forex </p>
          {isOpen2 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen2 && (
          <div className="answer-box">
            <p>
              Forex trading is the buying and selling of currencies on the
              foreign exchange market.when you trade forex online,you are
              counting on the value of the currency changing in yuor favor in
              the future.
            </p>
          </div>
        )}
      </div>

      <div className="box">
        <span onClick={handleToggle3}>
          <i class="fa-regular fa-circle-question"></i>
          <p> What moves the forex market</p>
          {isOpen3 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen3 && (
          <div className="answer-box">
            <p>
              There are several key factors that move the forex market: interest
              rate, inflation, economic stability,central banks and global
              events
            </p>
          </div>
        )}
      </div>

      <div className="box">
        <span onClick={handleToggle4}>
          <i class="fa-regular fa-circle-question"></i>
          <p> What is the commodity Trading. </p>
          {isOpen3 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen4 && (
          <div className="answer-box">
            <p>
              Commodity trading is buying and selling of raw materials such as
              precious metas and oil, that are important to the global economy
            </p>
          </div>
        )}
      </div>

      <div className="box">
        <span onClick={handleToggle5}>
          <i class="fa-regular fa-circle-question"></i>
          <p> How does CDFs work</p>
          {isOpen5 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen5 && (
          <div className="answer-box">
            <p>
              Contract for Difference (CFD) is a popular format for online
              trading.its main feature is the ability to profit form proce
              movements of the underlying instrument in any direction.In the
              case, you do not need to own this asset physically
            </p>
          </div>
        )}
      </div>

      <div className="box">
        <span onClick={handleToggle6}>
          <i class="fa-regular fa-circle-question"></i>
          <p> What about Privacy policy?</p>
          {isOpen6 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
        {isOpen6 && (
          <div className="answer-box">
            <p>
              A privacy policy outlines how personal information is collected,
              used, and protected by a company or website. It informs users
              about data handling practices, their rights, and security
              measures.
            </p>
          </div>
        )}
      </div>

    
    </div>
  );
};

export default Faq;
