import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Form/Login';
import ErrorPage from '../ErrorPage';

const UnAuth = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default UnAuth;
