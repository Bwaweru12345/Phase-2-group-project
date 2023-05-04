import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Awards from './Header/Awards';
import RealEstateList from './Home';
import { Routes ,Route } from 'react-router-dom';
function Pages() {
  return (
    <div >
    <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/awards" element={<Awards />} />
         <Route path="/RealEstateList" element={<RealEstateList />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default Pages;
