import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    const {  isLoggedIn } = useContext(AuthContext);

    const [ismobile, setIsmobile] = useState(false);

    const handleMenu = () => {
        setIsmobile(!ismobile);
    };

    const closeMenu = () => {
        setIsmobile(false);
    };

    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo">
                <i class="fa-brands fa-pinterest"></i>
                    <p>Pine-Hub</p>
                </Link>
                <div className={ismobile ? "mobile-link" : "nav-link"} onClick={closeMenu}>
                    <Link to="/" className="link">
                        Home
                    </Link>
                            <Link to="/Service" className="link">
                                Service
                            </Link>
                    {isLoggedIn ? (
                        <Fragment>
                            <Link to="/About" className="link">
                                About
                            </Link>
                            <Link to="/Contact" className="link">
                                Contact
                            </Link>
                        </Fragment>
                    ) : (
                        <Link to="/LogIn" className="link">
                            Login
                        </Link>
                    )}
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
