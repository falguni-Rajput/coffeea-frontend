import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Components/HOME/Contact/contact';
import Details from './Pages/details'
import Addcart from './Pages/addcart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Address from './Pages/address'
import Order from './Pages/order'
import Emptycart from './Pages/emptycart';
import OrderConfirm from './Pages/OrderConfirm';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Menu" element={<Menu />} />
           <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path='/addcart' element={<Addcart/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path="/login" element={<Login />} />
             <Route path="/address/:id" element={<Address />} />
             <Route path="/orderpage/:id" element={<Order />} />
            <Route path="/cartempty" element={<Emptycart/>} />
              <Route path="/orderconfirm" element={<OrderConfirm/>} />
      </Routes>

  
      <ToastContainer
  position={window.innerWidth <= 767 ? "top-center" : "top-right"}
  autoClose={1000}
/>
    
    
    </div>
  )
}
  
export default App