import './App.css';
import Header from './components/common/header.js'
import Footer from './components/common/footer.js'
import About from './components/pages/aboutus.js'
import Cart from './components/pages/cart.js'
import Category from './components/pages/category.js'
import Contactinfo from './components/pages/contactinfo.js'
import Product from './components/pages/product.js'
import Subscription from './components/pages/subscription.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/home';


function App() {
  return (
    <>
      {/* <Header/> */}
      
      <BrowserRouter>
      <Routes>
      <Route element={<Header />} path="" >
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/About" />
          <Route element={<Cart />} path="/Cart" />
          <Route element={<Category />} path="/Category" />
          <Route element={<Contactinfo />} path="/Contactinfo" />
          <Route element={<Product />} path="/Product" />
          <Route element={<Subscription />} path="/Subscription" />
      </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
