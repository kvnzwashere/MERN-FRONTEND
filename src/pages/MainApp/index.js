import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../assets/components';
import './mainApp.scss';




const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <div className="header-wrapper">
      <Header />
      </div>
      <div className="content-wrapper">
      <Routes>
  <Route path='/create-blog' element={<CreateBlog />} exact></Route>
  <Route path='/detail-blog' element={<DetailBlog />} ></Route>
  <Route path='/' element={<Home />} ></Route>
</Routes>




      </div>
      <div className="footer-wrapper">
      <Footer />
    </div>
  </div>
  );
}

export default MainApp;
