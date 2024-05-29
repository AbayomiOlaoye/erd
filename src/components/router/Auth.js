import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import ErrorPage from '../ErrorPage';
// import Nav from '../SideBar/Nav';

const Auth = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Auth;