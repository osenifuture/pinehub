import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <span>
          <i class="fa-brands fa-pinterest"></i>
          <h2>ine-Hub</h2>
        </span>
        <p>
          Artificial intelligence in asset management utilizes advanced
          algorithms to analyze market trends, historical data, and real-time
          information, enabling automated decision-making for buying, selling,
          and managing assets . It optimizes strategies, minimizes risks, and
          capitalizes on market fluctuations, enhancing trading efficiency and
          potentially delivering returns.
        </p>
        
        <footer>
          <p>&copy; 2023 Pine-Hub. All rights reserved.</p>
        </footer>
      </div>
      <div className="footer-box">
        <h3>Resources</h3>
        <Link to="/Term" className="link">
          PRIVACY POLICY{" "}
        </Link>
        <Link to="/Disclaimer" className="link">
          DISCLAIMER{" "}
        </Link>
        <Link to="/Cookies" className="link">
          COOKIES POLICY{" "}
        </Link>
        <Link to="/Certification" className="link">
          CERTIFICATION
        </Link>
      </div>
      <div className="footer-box">
        <h3>Quick Link</h3>
        <Link className="link">Network Stats</Link>
        <Link className="link">Governance</Link>
        <Link className="link">Exchange Markets</Link>
        <Link className="link">Manual Traiding</Link>
        <Link className="link">Auto-Trading</Link>
      </div>
      <div className="footer-box">
        <h3>Get In Touch</h3>
        <div className="footerbox-inner">
          <span>
            <i class="fa-solid fa-location-dot"></i>
            <p>11 Norfolk Avenue, London United Kingdom, N156JX</p>
          </span>
          <span>
            <i class="fa-solid fa-phone"></i>
            <a href="tel:">+012 345 67890</a>
          </span>
          <span>
            <i class="fa-solid fa-envelope"></i>
            <a href="/">info@example.com</a>
          </span>
        </div>
        <h3>Follw Us:</h3>
        <span>
          <a href="/">
          <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
