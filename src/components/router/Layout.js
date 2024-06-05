import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth';
import UnAuth from './UnAuth';

const Layout = () => {
  const isAuth = true;
  return (
    <>
      <ToastContainer theme="colored" position="top-right" />
      {
        isAuth
        ? <Auth />
        : <UnAuth />
      }
    </>
  );
};

export default Layout;
