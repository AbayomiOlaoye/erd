import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/main_logo.svg';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <Link to="/" className={styles.logoContainer}>
        <img
          src={logo}
          className={styles.logo}
          alt="El-Kanis Agro"
        />
      </Link>
    </div>
  )
}

export default TopBar;

// <div className="topRight">
//           <div className="topbarIconContainer">
//             <NotificationsNone />
//             <span className="topIconBadge">2</span>
//           </div>
//           <div className="topbarIconContainer">
//             <Settings />
//           </div>
//           <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
//         </div>