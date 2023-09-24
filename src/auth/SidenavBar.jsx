import { Fragment, useState } from "react";

import { Outlet, Link } from "react-router-dom";

const SideNavBar = () => {
    const [isMobile, setIsMobile] = useState(false)


  const toggleSidebar = () => {
    setIsMobile(!isMobile)
    console.log('btn clicked')
  }
  return (
    <Fragment>
      <div className={`sidenavbar ${isMobile ? "mobile active" : ""}`}>
        <ul>
        <Link to='/' onClick={() =>setIsMobile()}> Home</Link>
        <Link to='/UpgradeAccount'  onClick={() =>setIsMobile()}>Upgrade Account</Link>
        <Link to='/Invest'   onClick={() =>setIsMobile()}>Invest</Link>
        <Link to='/Withdraw'  onClick={() =>setIsMobile()}>Withdraw</Link>
        <Link to='/Setting' onClick={() =>setIsMobile()}>Settings</Link>
        </ul>
      </div>
        <div className={`toggle-button`} onClick={toggleSidebar}>
        &#9776;
      </div>
      <Outlet />
    </Fragment>
  );
};

export default SideNavBar;
