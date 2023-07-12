import './App.css';
import Header from './componets/Header';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Main from './componets/Main';
import Bookmark from './componets/Bookmark';
import ProductsList from './componets/ProductsList';
import Footer from './componets/Footer';
function App() {
  const [menuOn , setMenuOn] = useState(false)
  const menuHandle = () =>{
    setMenuOn(!menuOn)
  }
  return (
    <div>
      <Header menuHandle={menuHandle}/>
      <Routes>
        <Route path='/' element={<Main menuOn={menuOn} menuHandle={menuHandle}/>} />
        <Route path='/products/list' element={<ProductsList menuOn={menuOn} menuHandle={menuHandle}/>} />
        <Route path='/bookmark' element={<Bookmark menuOn={menuOn} menuHandle={menuHandle}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
