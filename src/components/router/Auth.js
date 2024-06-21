import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../ErrorPage';
import User from '../pages/User/User';
import UserList from '../pages/User/UserList';
import Rice from '../pages/Product/Rice';
import RiceList from '../pages/Product/RiceList';
import StaffData from '../pages/Hr/StaffData';
import Staff from '../pages/Hr/Staff';
import Payroll from '../pages/Hr/Payroll';


const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff_data" element={<StaffData />} />
      <Route path="/staff_data/:staffId" element={<Staff />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/rice" element={<RiceList />} />
      <Route path="/rice/:id" element={<Rice />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Auth;