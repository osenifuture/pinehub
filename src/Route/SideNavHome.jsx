import { Link } from "react-router-dom";
import { Fragment } from "react";
const SideNavHome = () => {
    return(
        <Fragment>
        <div className="side-home">
        <div className="sidehome-box1">
            <img src="https://img.freepik.com/premium-photo/portrait-confident-senior-african-american-businessman-suit-ceo-with-glasses-crossed-arms_777271-16303.jpg" alt="" />
            <h3>Hello, Oladipo Diya</h3>
        </div>
        <div className="sidehome-box2">
            <h3>Total Balance</h3>
            <h3>NGN 0.oo</h3>
            <Link className="wallet-link"><h3>Fund  Wallet</h3> <i className="fa-solid fa-plus"></i></Link>
        </div>
        </div>
        <div className="home-card">
            <img src="https://i.ibb.co/8PDgbN2/7a999e36df46a011a1bc69189a291a006f8b9587089e8247732e145918c07bd7-removebg-preview.png" alt="" />
            {/* <img src="https://i.ibb.co/khvbWTh/pngimg-com-credit-card-PNG37-removebg-preview.png" alt="" /> */}
            <h3>Wallet Account:Pine-Hub</h3>
            <h3>Account Name:Oladipo Diya</h3>
        </div>
        <div className="sidehome-container">
            <h1>Quick Action</h1>
            <span>
                <Link to='/Invest' className="quick-box">
                <i className="fa-solid fa-building-columns"></i>
                    <h3>Invest</h3>
                </Link>
                <Link to='/Withdraw' className="quick-box">
                <i className="fa-solid fa-wallet"></i>
                    <h3>Withdraw</h3>
                </Link>
                <Link to='/UpgradeAccount' className="quick-box">
                {/* <i className="fa-solid fa-person-arrow-up-from-line"></i> */}
                <i className="fa-solid fa-layer-group"></i>
                    <h3>Upgrade Account</h3>
                </Link>
                <Link to='/Setting' className="quick-box">
                <i className="fa-solid fa-gear"></i>
                    <h3>Setting</h3>
                </Link>
  
            </span>
        </div>
        </Fragment>
    )
}

export default SideNavHome;