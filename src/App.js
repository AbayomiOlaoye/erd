import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/router/Layout';
import Nav from './components/SideBar/Nav';
import TopBar from './components/SideBar/TopBar';
import './App.css';

function App() {
  const isAuth = true;
  return (
    <div className="container">
      {isAuth && <BrowserRouter>
        <TopBar />
        <div className="App">
          <Nav />
          <Layout />
        </div>
      </BrowserRouter>}
    </div> 
  );
}

export default App;
