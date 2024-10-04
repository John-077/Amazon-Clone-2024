import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import Orders from "./pages/Orders/Orders";
import Linding from "./pages/Linding/Linding";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import Footer from "./Components/Footer/Footer";
function Routering() {
  const stripePromise = loadStripe(
    "pk_test_51Q51fnFjJ1fEgSapfbDSAdhtVRdNaq7lRMXtqwdeY4xSEdDk5dOL4UPRKgQDrj5pThTgnpipZAkrfkNfpWn5kLQ70084KQAdb3"
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Linding />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
     
    </>
  );
}

export default Routering;
