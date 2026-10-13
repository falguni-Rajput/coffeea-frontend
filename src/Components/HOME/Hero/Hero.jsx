import React from 'react'
import './Hero.css'
import { FaInstagram, FaTwitter } from "react-icons/fa";
import coffecup from "../../../assets/cofee-big-cup-remove.png"
import splash from "../../../assets/splash-cup-remove.png"
import coffee1 from '../../../assets/1single_seeds-removebg-preview.png'
import coffee2 from '../../../assets/2nd_single_seeds-removebg-preview.png'
import coffee3 from '../../../assets/3rd_single_seeds-removebg-preview.png'
import coffee4 from '../../../assets/4th_single_seeds-removebg-preview.png'
import coffee5 from '../../../assets/6th_single_seeds-removebg-preview.png'
import { Navigate, useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate()
    {/*---------making array of seeds ------------- */} 
const seeds = [
  coffee1,coffee2,coffee3,coffee4,coffee5,
  coffee1,coffee2,coffee3,coffee4,coffee5,
  coffee1,coffee2,coffee3,coffee4,coffee5,
   coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5,
    coffee1,coffee2,coffee3,coffee4,coffee5
]

  return (
<div className='Hero-conatiner'>
      <div className='text'>
                        <h1>Brewed with Love.<br/>
                         Served with Warmth.</h1>
                         <p>Disocver hand-crafted coofee, made with locally
                         sourced beans and heart </p>
                 <div className='button-text'> 
                         <button onClick={()=>navigate(`/menu`)}>Order now</button>
                 </div>
         <div className='line'>
              <div className='text-icons'>
                            <p>Follow us on _ </p> 
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
               </div>
        </div>
     </div>

      <div className='cup'>
          <div className='cup-container'>
               <div className='splash-conatainer'>
                   <img src={splash} className='cofee-cup'></img>
               </div>
                <div className='cuptild'>
                    <img src={coffecup} className='creamy-cup'></img>
                </div>
  

          </div>
        <div className='been-conatiner'>
            {/*--------- every seed has been fatching from array------------- */} 
       {
    seeds.map((item, index) => (
      <img
        key={index}
        src={item}
        alt=""
        className={` bean${index + 1}`}
       />
    ))
  }
   </div>
  </div>
      
</div>
  )
}

export default Hero
