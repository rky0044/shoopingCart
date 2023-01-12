import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './component/NavBar';
import ProductCart from './component/ProductCart';
import Cartpage from './component/Cartpage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCart />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
