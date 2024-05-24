import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Body from "./components/Body.js";
import ProductRight from "./components/Product-right.js";
import ProductLeft from "./components/Product-left.js";

export default function App() {
  return (
    <div className="App">
        <Nav/>
        <Body/>
      <div className="product-categories">
        <ProductLeft/>
        <ProductRight/>
      </div>
    </div>
  )
}