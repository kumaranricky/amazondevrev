import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import ShopBasket from "./components/ShopBasket";
import React from "react";

function App() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
              <Banner/>
              <ProductList/>
            </React.Fragment>
          }/>
          <Route exact path='/checkout' element={
          <React.Fragment>
            <Checkout/>
            <ShopBasket/>
          </React.Fragment>
        } />
        </Routes>
      </Router>
    );
  }

export default App;
