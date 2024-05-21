import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth';
import UnAuth from './UnAuth';

const Layout = () => {
  const isAuth = false;
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-right" />
      {
        isAuth
        ? <Auth />
        : <UnAuth />
      }
    </BrowserRouter>
  );
};

export default Layout