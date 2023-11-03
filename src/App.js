import React, { useState } from 'react';
import './App.css';
import Header from './components/common/header.js'
import Footer from './components/common/footer.js'
import Aboutus from './components/pages/aboutus.js'
import Cart from './components/pages/cart.js'
import Category from './components/pages/category'
import Contactinfo from './components/pages/contactinfo.js'
import Product from './components/pages/product.js'
import Subscription from './components/pages/subscription.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './components/pages/contactinfo'
import Home from './components/pages/home.js';
import Checkout from './components/pages/checkout.js';
import Shipping from './components/pages/shipping.js'
import Payment from './components/pages/payment';
import Signup from './components/pages/signup';
import Resetpassword from './components/pages/resetpassword';
import Wellcome from './components/pages/wellcome.js';
import { Sidebar } from './components/pages/sidebar.js'

function App() {

  // useEffect(() => {
  //   window.addEventListener('resize', gettop)
  //   gettop();
  // }, [])
  // const gettop = () => {
  //   let header = document.querySelector('header')
  //   let cart1 = document.querySelector(".opencart")
  //   let headerHeight = header.offsetHeight;
  //   let sidebar = document.querySelector(".sidebar");
  //   sidebar.setAttribute("style", `top:${headerHeight}px`);
  //   cart1.setAttribute("style",`top:${headerHeight}px`);
  // }
  // console.log(headerHeight, "=====");    
  // useEffect(()=>{
  //   window.addEventListener('resize',carttop)
  // },[])
  // const carttop = ()=>{
  //   let header = document.querySelector("header")
  //   let headerHeight = header.offsetHeight;
  //   let cart1 = document.querySelector(".cart1")
  //   cart1.setAttribute("style",`top:${headerHeight}px`)
  //   console.log(  headerHeight  , "height")
  // }
  const [sidebar, setsidebar] = useState(false)
  const sideclick = () => {
    setsidebar(!sidebar)
    console.log("sidebaropen")
  }

  const [cart, setcart] = useState(false)
  const cartclick = () => {
    setcart(!cart)
  }

  // const [popup,setpopup] =useState(false)
  // const signup = () =>{
  //   setpopup(!popup)
  //   console.log("clicked")
  // }

  return (
    <>
      {/* <Header click={sideclick} toggle={sidebar} /> */}
      <BrowserRouter>
        <Cart opencart={cart} />
        <Header click={sideclick} toggle={sidebar} clickcart={cartclick} toggle2={cart} />
        <Sidebar sidebar={sidebar} />
        <Routes>
          <Route element={<Home />} path='' />
          <Route element={<Aboutus />} path='/Aboutus' />
          <Route element={<Category />} path='/category' />
          <Route element={<Contactinfo />} path='/Contactinfo' />
          <Route element={<Product />} path='/Product' />
          <Route element={<Contact />} path='/Contact' />
          <Route element={<Checkout />} path='/Checkout' />
          <Route element={<Shipping />} path='/Shipping' />
          <Route element={<Payment />} path='/Payment' />
          <Route element={<Wellcome />} path='/Wellcome' />
          <Route element={<Resetpassword />} path='/Resetpassword' />
          <Route element={<Signup />} path='/Signup' />
          <Route element={<Subscription />} path='/Subscription' />
        </Routes>
        {/* <Wellcome  popup={popup}  /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
