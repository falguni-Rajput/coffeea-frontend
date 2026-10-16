import React, { useState } from "react";
import "./Choose.css";

import chocolate from "../../../assets/Chocolate-Espresso.webp";
import Vanilla from "../../../assets/Vanilla-Latte.webp";
import cold from "../../../assets/cold1-removebg.png";
import Matcha from "../../../assets/Matcha-Latte.webp";
import Caramel from "../../../assets/carmel1-removebg.png";
import Hazelnut from "../../../assets/Hazelnut-Espresso.webp";
import Mint from "../../../assets/mint-cofeee-removebg.png";


function Choose() {

  const coffeeData = {
    "Mint": Mint,
    "Hazelnut": Hazelnut,
    "Caramel": Caramel,
    "Matcha": Matcha,
    "Cold Coffee": cold,
    "Vanilla": Vanilla,
    "Chocolate Coffee": chocolate,
  };


  const [value, setValue] = useState(Vanilla);
  const [pos, setPos] = useState("");


  const click = (e) => {

    const data = e.target.textContent.trim();

    if(coffeeData[data]){
      setValue(coffeeData[data]);
    }

  };


  const mobile = (e) => {

    const midpoint = window.innerWidth / 2;

    const x = e.touches[0].clientX;

    if(x > midpoint){
      setPos("right");
    }
    else{
      setPos("left");
    }

  };


  return (

    <div className="categories-container">

      <div className="heading-container">
        <h4>Crafted Just for You</h4>

        <p>
          Click the coffee cup to experience our finest coffee selection.
        </p>
      </div>


      <div className="circle-container">


        <div 
          className={`text-circle ${pos}`} 
          onClick={click}
          onTouchMove={mobile}
        >

          <p>Vanilla</p>

          <p>Caramel</p>

          <p>Hazelnut</p>

          <p>Mint</p>

          <p>Matcha</p>

          <p>Cold Coffee</p>

          <p>Chocolate Coffee</p>


        </div>


        <div className="mini-circle">

          <img
            src={value}
            className="cuppp"
            alt="coffee"
          />

        </div>


      </div>


    </div>

  );

}


export default Choose;