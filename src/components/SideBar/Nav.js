import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {
  FaBuildingCircleArrowRight,
  FaPersonArrowDownToLine,
  FaArrowRotateLeft,
  FaRegCalendarDays,
  FaPersonCircleQuestion,
  FaListCheck,
 } from "react-icons/fa6";
 import { MdInfoOutline, MdLineWeight, MdOutlineEmergencyRecording, MdOutlineAdminPanelSettings } from "react-icons/md";
 import { CiBag1 } from "react-icons/ci";
 import { BsHouseDash } from "react-icons/bs";
 import { SiBoost, SiBookstack, SiSoundcharts } from "react-icons/si";
 import { AiOutlineStop, AiOutlineStock } from "react-icons/ai";
import styles from './Nav.module.scss';

const tags = [
  {
    id: 'hr',
    name: 'HR',
    children: [
      { id: 'info', name: 'Staff Information', path: 'staff_data', icon: <MdInfoOutline className={styles.sidebarIcon} /> },
      { id: 'payroll', name: 'Payroll', path: 'payroll', icon: <FaRegCalendarDays className={styles.sidebarIcon} /> },
    ],
  },
  { 
    id: 'production',
    name: 'Production',
    children: [
      { id: 'rice', name: 'Rice', path: 'rice', icon: <CiBag1 className={styles.sidebarIcon} /> },
      { id: 'booster', name: 'Optimum Booster', path: 'optimum-booster', icon: <SiBoost className={styles.sidebarIcon} /> },
      { id: 'stopper', name: 'Stopper Solution', path: 'stopper-solution', icon: <AiOutlineStop className={styles.sidebarIcon} /> },
      { id: 'weight', name: 'Heavy Weight', path: 'heavy-weight', icon: <MdLineWeight className={styles.sidebarIcon} />},
    ],
  },
  {
    id: 'sales',
    name: 'Sales',
    children: [
      { id: 'orders', name: 'Sales', path: 'orders', icon: <FaBuildingCircleArrowRight className={styles.sidebarIcon} /> },
      { id: 'debtors', name: 'Debtor', path: 'debtors', icon: <FaPersonArrowDownToLine className={styles.sidebarIcon} /> },
      { id: 'repayment', name: 'Repayment', path: 'repayment', icon: <FaArrowRotateLeft className={styles.sidebarIcon} /> },
    ],
  },
  {
    id: 'inventory',
    name: 'Inventory',
    children: [
      { id: 'requisition', name: 'Requisition', path: 'requisition', icon: <FaPersonCircleQuestion className={styles.sidebarIcon} />},
      { id: 'inspection', name: 'Receiving Inspection', path: 'inspection', icon: <FaListCheck className={styles.sidebarIcon} />},
      { id: 'stock', name: 'Stock', path: 'stock', icon: <AiOutlineStock className={styles.sidebarIcon} /> },
    ],
  },
  {
    id: 'report',
    name: 'Reports',
    children: [
      { id: 'productionRecords', name: 'Production Records', path: 'productionRecords', icon: <SiBookstack className={styles.sidebarIcon} /> },
      { id: 'charts', name: 'Visual Presentation', path: 'visuals', icon: <SiSoundcharts className={styles.sidebarIcon} /> },
      { id: 'video', name: 'Video Feeds', path: 'cctv', icon: <MdOutlineEmergencyRecording className={styles.sidebarIcon} /> },
    ],
  },
  {
    id: 'admin',
    name: 'Admin',
    children: [
      { id: 'users', name: 'Users', path: 'users', icon: <MdOutlineAdminPanelSettings className={styles.sidebarIcon} /> },
    ],
  },
];

const Nav = () => {

  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <li className={styles.openLink}>
          <Link to="/" className={styles.title}>
            <BsHouseDash className={styles.sidebarIcon} />
            <h3 className={styles.dash}>Dashboard</h3>
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag.id} className={styles.openLink}>
            <h3 className={styles.title}>{tag.name}</h3>
            {tag.children && (
              <ul className={styles.link}>
                {tag.children.map((child) => (
                  <Link to={child.path} className={styles.sidebarListItem}>
                    <li key={child.id} className={styles.sidebarListItem}>
                      {child.icon && child.icon}
                      <span className={styles.sidebarListItemText}>{child.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <Outlet />
    </nav>
  );
};

export default Nav;
