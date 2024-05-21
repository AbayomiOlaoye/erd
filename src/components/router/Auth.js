import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/Dashboard/Dashboard';

const Auth = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default Auth;