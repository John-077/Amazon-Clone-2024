import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import Orders from "./pages/Orders/Orders";
import Linding from "./pages/Linding/Linding";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function Routering() {
  return (
                
    <Routes>
      <Route path="/" element={<Linding />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes>
    
  );
}

export default Routering;
