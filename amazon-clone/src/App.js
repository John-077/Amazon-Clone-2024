import React from "react";
// import Routering from "./Router";
// import { Routes, Route } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
// import Landing from "./pages/Landing/Landing";
import Carousels from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
// import Signin from "./pages/Auth/Signup";
// import Payment from "./pages/Payment/Payment";
// import Orders from "./pages/Orders/Orders";
// import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div>
      <LayOut>
        <Carousels />
        <Category />
        <Product />
      </LayOut>
      {/* <Routering /> */}

      {/* <Routes>
        <Route path="/" element={<LayOut />} />
        
        <Route path="/auth" element={<Signin />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
    </div>
  );
}

export default App;
