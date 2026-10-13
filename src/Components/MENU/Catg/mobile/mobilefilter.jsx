import React from 'react'
import './mobilefilter.css'
import { useContext } from 'react'
import { MyCards } from '../../../../context/Productcontext'
function Mobilefilter() {


   const {setctg ,setPrice,setRating} = useContext(MyCards)

  return (
    <div className='filtermobile-conatiner'>
      <div className='filter-options'>

<select defaultValue="" onChange={(e)=>setctg(e.target.value)}>
  <option value="" disabled hidden >Category</option>
  <option value="expresso">expresso</option>
   <option value="Latte" >Latte</option>
    <option value="Cappuccino" >Cappuccino</option> 
     <option value="Americano" >Americano</option>
      <option value="Cold Coffee" >Cold Coffee</option>
       <option value="Mocha" >Mocha</option>
</select>


<select defaultValue=""onChange={(e)=>setRating(Number(e.target.value))} >
<option value="" disabled hidden >Rating</option>
<option value="4.9" >4.9</option>
<option value="4.8" >4.8</option>
<option value="5" >5 </option>
<option value="4.7" >4.7</option>
<option value="4.6" >4.6</option>
<option value="4" >4</option>
</select>

<select defaultValue="" onChange={(e)=>setPrice(Number(e.target.value))}>
  <option value="" disabled hidden >Price</option>
  <option value="200">Under ₹200</option>
  <option value="250">Under ₹250</option>
  <option value="300">Under ₹300</option>
  <option value="350">Under ₹350</option>
  <option value="500">Under ₹500</option>
</select>


      </div>
    </div>
  )
}

export default Mobilefilter
