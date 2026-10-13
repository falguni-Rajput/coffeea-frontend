import React from 'react'
import { useState } from "react";
import { useEffect } from 'react'
import { useContext } from 'react'
import { MyCards } from '../../../context/Productcontext'
import './filter.css'
function Filter() {
  const {ctg, rating, setctg, setPrice, setRating} = useContext(MyCards)
  const [inputPrice, setInputPrice] = useState("");
  useEffect(() => {
  const timer = setTimeout(() => {
    setPrice(inputPrice);
  }, 500);

  return () => clearTimeout(timer);
}, [inputPrice]);
   return (
   <div className="container-filter">
    {/*--------------- Category-------------------- */}
    <h1>Filters</h1>
    <div className="box-1"     
onChange={(e) => setctg(e.target.value) }>
 

<h2>Category</h2>
<p><input type="radio" name="category" value="Espresso" checked={ctg === "Espresso"}/> Espresso</p>

<p><input type="radio" name="category" value="Latte"    checked={ctg === "Latte"}/> Latte</p>

<p><input type="radio" name="category" value="Cappuccino"    checked={ctg === "Cappuccino"} /> Cappuccino</p>

<p><input type="radio" name="category" value="Americano"  checked={ctg === "Americano"} /> Americano</p>

<p><input type="radio" name="category" value="Cold Coffee"checked={ctg === "Cold Coffee"} /> Cold Coffee</p>

<p><input type="radio" name="category" value="Mocha"   checked={ctg === "Mocha"}/> Mocha</p>
</div>
    {/*---------------- Price-------------- */}
    <div className="box-2">
      <h2>Price</h2>

      <input
       
        placeholder="Enter Max Price"
 value={inputPrice}
        onChange={(e)=>setInputPrice(e.target.value)}
      
      />
  
    </div>

    {/*------------ Rating------------------- */}
    <div className="box-3"
     onChange={(e) => setRating(Number(e.target.value))}
    
    >
      <h2>Rating</h2>

      <p><input type="radio" name="rating"   value="5"  checked={rating === 5} /> 5</p>
      <p><input type="radio" name="rating"   value = "4.9"   checked={rating === 4.9}/> 4.9</p>
      <p><input type="radio" name="rating"  value="4.7"    checked={rating === 4.7}/> 4.7</p>
        <p><input type="radio" name="rating"   value = "4.6"   checked={rating === 4.6}/> 4.6</p>
      <p><input type="radio" name="rating"  value="4"  checked={rating === 4} /> 4</p>
        <p><input type="radio" name="rating"   value = "4.8"  checked={rating === 4.8}  /> 4.8</p>
  
    </div>

  
    

    {/*------------ Clear Filter------------------ */}
    <div className="box-5">
      <button onClick={() => {
    setctg("");
    setPrice("");
    setRating("");
   
    setPrice("")
  setInputPrice("")
  }}>Clear Filters</button>
  </div>
  </div>






















)
}
export default Filter












