import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Auth/Signup";
import Payment from './pages/Payment/Payment'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import Orders from "./pages/Orders/Orders";
import Linding from "./pages/Linding";
function Routering() {
  return (
    <Routes>
      <Route path="/" element={<Linding />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Results" element={<Results />} />
    </Routes>
  );
}

export default Routering
