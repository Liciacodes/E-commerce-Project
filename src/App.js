import React, { useEffect, useState } from "react";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getCategories } from "./fetcher";
import Home from "./components/Home";

function App() {
  const [categories, setCategories] = useState({
    errorMessage: "",
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="orderconfirmation" element={<OrderConfirmation />} /> */}
            {/* <Route path="search" element={<SearchResults />} /> */}
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
