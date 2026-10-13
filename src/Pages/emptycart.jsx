import React from 'react';

import cartimg from "./../assets/emptycart.svg";
import "./emptycart.css";
import { useNavigate } from 'react-router-dom';


function Emptycart() {


  /* --------------------- Navigation handler --------------------- */
  const navigate = useNavigate();



  return (

    <div className='login-check'>


      {/* --------------------- Empty Cart Image Section --------------------- */}
      <div className='login-img'>

        <img 
          src={cartimg}
          alt="empty cart"
        />

      </div>




      {/* --------------------- Empty Cart Message Section --------------------- */}
      <div className="login-txt">


        {/* ------- Empty Cart Heading ------- */}
        <h1>
          Cart Empty
        </h1>




        {/* ------- Empty Cart Description ------- */}
        <p>

          Sorry! Your cart looking empty.

        </p>




        {/* --------------------- Redirect User To Shopping Page --------------------- */}
        <button

          className="cartempty-btn"

          onClick={() => navigate("/menu")}

        >

          Shoping

        </button>


      </div>


    </div>

  )

}


export default Emptycart;