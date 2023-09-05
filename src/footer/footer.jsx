
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <span>
        <i class="fa-brands fa-pinterest"></i>
        <h2>ine-Hub</h2>
        </span>
        <p>
            Welcome to Pine-Hub: At Pine Intelligence Trading Technology, our
            experienced team of asset management professionals offers a proven
            and unique hybrid system that provides a sustainable and low-risk
            income stream. Join us today to safeguard your financial future with
            our cutting-edge automated passive income technology.
        </p>
        <Link to='/Term' className="link">PRIVACY POLICY <i class="fa-regular fa-hand-point-left"></i></Link>
        <footer><p>&copy; 2023 Pine-Hub. All rights reserved.</p></footer>
      </div>
      <div className="footer-box">
        <h3>Resources</h3>
        <Link className="link">How TO buy Coin</Link>
        <Link className="link">Coin Overview</Link>
        <Link className="link">Blog News</Link>
        <Link className="link">How to Sell Coin</Link>
        <Link className="link">How to Swap Coin</Link>
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
        <span><i class="fa-solid fa-location-dot"></i><p>123 Street, New York, USA</p></span>
        <span><i class="fa-solid fa-phone"></i><a href="tel:">+012 345 67890</a></span>
        <span><i class="fa-solid fa-envelope"></i><a href="/">info@example.com</a></span>
        </div>
        <h3>Follw Us:</h3>
        <span>
            <a href="/"><i className="fa-brands fa-facebook"></i></a>
            <a href="/"><i className="fa-brands fa-instagram"></i> </a>
            <a href="/"><i className="fa-brands fa-twitter"></i></a>
            <a href="/"><i className="fa-brands fa-whatsapp"></i></a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
