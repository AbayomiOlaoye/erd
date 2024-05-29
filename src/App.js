import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/router/Layout';
import Nav from './components/SideBar/Nav';

function App() {
  return (
    <>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>

      <Layout />
    </> 
  );
}

export default App;
