import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Admin from "../Admin/Admin";
import AdminRequireAuth from "../Admin/AdminRequireAuth";
import AdminLogin from "../Pages/AdminLogin";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import ProductCards from "../Pages/ProductCard/ProductCards";
import Televisions from "../Pages/ProductCard/Television";
import Mobile from "../Pages/ProductCard/Mobile";
import HeadPhone from "../Pages/ProductCard/HeadPhone";
import HomeAppliances from "../Pages/ProductCard/HomeAppliances";
import Computer from "../Pages/ProductCard/Computer";
import Personal from "../Pages/ProductCard/Personal";
import Kitchen from "../Pages/ProductCard/Kitchen";
import PrivateRoute from "./PrivateRoutes";
import ProductDetailpage from "../Pages/productdetailpage/ProductDetailpage";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/admin"
          element={
            <AdminRequireAuth>
              <Admin />
            </AdminRequireAuth>
          }
        ></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element = {<PrivateRoute><Payment/></PrivateRoute>}></Route>
        <Route path="/camera" element = {<ProductCards/>}></Route>
        <Route path="/televisions" element={<Televisions/>}></Route>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/headphone" element = {<HeadPhone/>}></Route>
        <Route path="/home" element = {<HomeAppliances/>}></Route>
        <Route path="/computer" element= {<Computer/>}></Route>
        <Route path="/personal" element = {<Personal/>}></Route>
        <Route path="/kitchen" element={<Kitchen/>}></Route>
        <Route path="/product" element= {<ProductDetailpage/>}></Route>
      
      </Routes>
    </div>
  );
};

export default AllRoutes;
