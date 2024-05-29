import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/main_logo.svg';
import styles from './Nav.module.scss';

const tags = [
  {
    id: 'hr',
    name: 'HR',
    path: 'human-resources',
    children: [
      { id: 'info', name: 'General Information', path: 'staff_data' },
      { id: 'payroll', name: 'Payroll', path: 'payroll' },
    ],
  },
  { 
    id: 'production',
    name: 'Production',
    path: 'production',
    children: [
      { id: 'rice', name: 'Rice', path: 'rice-production' },
      { id: 'booster', name: 'Optimum Booster', path: 'optimum-booster' },
      { id: 'stopper', name: 'Stopper Solution', path: 'stopper' },
      { id: 'weight', name: 'Heavy Weight', path: 'heavy-weight' },
    ],
  },
];

const Nav = ({ tags }) => {
  return (
    <>
      <nav className={styles.container}>
        <Link to="/">
          <img
            src={logo}
            className={styles.logo}
            alt="El-Kanis Agro"
          />
        </Link>

        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link to={tag.path}>{tag.name}</Link>
              {tag.children && (
                <ul>
                  {tag.children.map((child) => (
                    <li key={child.id}>
                      <Link to={`${tag.path}/${child.path}`}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Outlet />
      </nav>
    </>
  );
};

export default Nav;
