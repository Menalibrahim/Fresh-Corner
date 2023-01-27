import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import CardArray from './components/CardArray';
import Navbar from "./components/Navbar";
import Header from "./Header";
//import Footer from "./components/Footer";

import NavBar from './layouts/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './components'
import VegiProduct from './components/product/vegi';
import MeatProduct from './components/product/meat';

function App() {
  return (
   <Routes>
    <Route path='/' element={<NavBar />}>
    <Route index element={<Home />}/>
    <Route path='vegi' element={<VegiProduct />}/>
    <Route path='meat' element={<MeatProduct />}/>

    </Route>
   </Routes>
  );
}

export default App;
