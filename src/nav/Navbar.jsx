import { Link, Outlet } from "react-router-dom";
import { Fragment,  useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";



const Navbar = () => {
    const {isLoggedIn} = useContext(AuthContext);
    const [ismobile, setIsmobile] = useState(false);
    
    const handleMenu = () => {
        setIsmobile(!ismobile);
    };
    
    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo">
                <i className="fa-brands fa-pinterest"></i>
                    <p>ine-Hub</p>
                </Link>
            
                <div className={`nav-link ${ismobile ? "mobile-link active" : ""} `} onClick={() => setIsmobile(false)}>
                <Link to="/" className="link">Home</Link>
                <Link to="/About" className="link">About</Link>
                <Link to="/Service" className="link">Faqs</Link>
                <Link to="/Investment" className="link">Investment Plan</Link>
                <Link to="/Term" className="link">Terms</Link>
                <Link to="/Affiliate" className="link">Affiliate</Link>
                {
                    isLoggedIn && (
                        <Link to='/Profile' className="profile-link">
                            Profile
                        </Link>
                    )
                }
                </div>
                <div className="mobile-menu" onClick={handleMenu}>
                    {ismobile ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}

                </div>
                
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;



