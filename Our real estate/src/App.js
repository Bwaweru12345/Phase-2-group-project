import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Home from './components/Home';
import Awards from './components/Header/Awards';
import RealEstateList from './components/Home'
import { Routes ,Route } from 'react-router-dom';
function App() {
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

export default App;
