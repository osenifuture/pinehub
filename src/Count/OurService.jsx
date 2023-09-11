import { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const OurService = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <Fragment>
      <div className="ourservice-mother">
        <h2>Buy, Sell And Exchange Cryptocurrency</h2>
        <div className="service-container2">
          <div data-aos="fade-up" className="ourservice-box">
            <i className="fa-solid fa-money-check-dollar"></i>
            <h3>Currency Wallets</h3>
            <p>
              A currency wallet is a digital tool to securely store, manage, and
              exchange various currencies, like cryptocurrencies or traditional
              fiat money.
            </p>
          </div>
          <div data-aos="fade-up" className="ourservice-box">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <h3>Currency Transaction</h3>
            <p>
              Currency transaction refers to the process of exchanging one form
              of currency for another, often involving buying, selling, or
              transferring money internationally.
            </p>
          </div>
          <div data-aos="fade-up" className="ourservice-box">
            <span>
              <i className="fa-brands fa-ethereum"></i>
              <i className="fa-solid fa-building-columns"></i>
            </span>
            <h3>Crypto Investment</h3>
            <p>
              Crypto investment involves purchasing and holding cryptocurrencies
              with the aim of gaining profit as their value fluctuates in the
              volatile market.
            </p>
          </div>
          <div data-aos="fade-up" className="ourservice-box">
            <i className="fa-solid fa-rotate"></i>
            <h3>Currency Exchange</h3>
            <p>
              Currency exchange is the swapping of one currency for another at
              an agreed-upon rate, crucial for international trade, travel, and
              finance.
            </p>
          </div>
          <div data-aos="fade-up" className="ourservice-box">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <h3>Crypto Swap</h3>
            <p>
              Crypto swap is the instant exchange of one cryptocurrency for
              another, providing flexibility and convenience for diversifying or
              trading digital assets.
            </p>
          </div>
          <div data-aos="fade-up" className="ourservice-box">
            <i className="fa-solid fa-sterling-sign"></i>
            <h3>Token Sale</h3>
            <p>
              Token sale is the process in which new project tokens, often in
              the form of cryptocurrencies, are offered to investors or the
              public for fundraising or access to services.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurService;
