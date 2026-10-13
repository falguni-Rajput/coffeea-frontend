import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="Header-container">


      {/*-------- LOGO BOX-------- */}
      <div className="logo-box">
        <h2>Coffeea</h2>
      </div>



      {/*------------- MENU BOX---------------- */}
      <nav className={open ? "menu-box active" : "menu-box"}>

        <Link to="/" onClick={()=>setOpen(false)}>
          Home
        </Link>

        <Link to="/Menu" onClick={()=>setOpen(false)}>
          Menu
        </Link>

        <Link to="/About" onClick={()=>setOpen(false)}>
          About us
        </Link>
<Link to="/contact" onClick={()=>setOpen(false)}>
          Contact
        </Link>

        {/*--------- MOBILE BUTTONS------------- */}
        <div className="mobile-buttons">

          <Link to="/Signup" className="sign-btn">
            Signup
          </Link>

          <Link to="/addcart" className="addcart-btn">
            AddCart
          </Link>

        </div>


      </nav>



      {/*========== BUTTON BOX============= */}
      <div className="button-box">
        <Link to="/Signup" className="sign-btn">
          Signup
        </Link>
        <Link to="/addcart" className="addcart-btn">
          AddCart
        </Link>
      </div>



      {/*--------------- HAMBURGER---------------- */}
      <div 
        className="hamburger"
        onClick={()=>setOpen(!open)}
      >
        ☰
      </div>
    </header>
  );
}

export default Header;