import { Link, Outlet, useNavigate } from "react-router-dom";
import { Fragment,  useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
    const {Logout} = useContext(AuthContext);
    const [ismobile, setIsmobile] = useState(false);
    const navigate = useNavigate()


    const handleMenu = () => {
        setIsmobile(!ismobile);
    };

    const closeMenu = () => {
        setIsmobile(false);
    };

    const handleLogOut = () => {
        Logout()
        navigate('/Login')
    }

    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo">
                <i class="fa-brands fa-pinterest"></i>
                    <p>ine-Hub</p>
                </Link>
                <div className={ismobile ? "mobile-link" : "nav-link"} onClick={closeMenu}>
                    <Link to="/" className="link">
                        Home
                    </Link>

                    <Link to="/About" className="link">
                                About
                            </Link>
                            <Link to="/Service" className="link">
                                Service
                            </Link>
                </div>
                 <span>
                    <p onClick={handleLogOut}>Logout</p>
                </span>
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
