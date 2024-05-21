import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/main_logo.svg';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <>
      <nav className={styles.container}>
        <ul>
          <li>
            <Link to="/">
              <img
                src={logo}
                className={styles.logo}
                alt="El-Kanis Agro"
              />
            </Link>
          </li>
          <li>
            <Link to="dashboard">Students</Link>
          </li>
          <li>
            <Link to="teachers">Teachers</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
};

export default Nav;
