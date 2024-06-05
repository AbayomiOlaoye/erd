import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../ErrorPage';
import User from '../pages/User/User';
import UserList from '../pages/User/UserList';
import Product from '../pages/Product/Product';
import ProductList from '../pages/Product/ProductList';
import StaffData from '../pages/Hr/StaffData';
import Staff from '../pages/Hr/Staff';


const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff_data" element={<StaffData />} />
      <Route path="/staff_data/:staffId" element={<Staff />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Auth;