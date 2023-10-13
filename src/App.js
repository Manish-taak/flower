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


function App() {
  return (
    <>
      {/* <Headers /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} path='' >
            <Route element={<Home />} path='/home' />
            <Route element={<Aboutus />} path='/Aboutus' />
            <Route element={<Cart />} path='/Cart' />
            <Route element={<Category />} path='/category' />
            <Route element={<Contactinfo />} path='/Contactinfo' />
            <Route element={<Product />} path='/Product' />
            <Route element={<Contact />} path='/Contact' />
            <Route element={<Subscription />} path='/Subscription'/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
