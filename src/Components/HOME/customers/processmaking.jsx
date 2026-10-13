import React from 'react'
import "./processmaking.css"
import beans from "../../../assets/Coffee-beans.mp4"
import making from "../../../assets/Making-Coffee.mp4"
function Processmaking() {
    {/*---------------------coffeea making process------------------------*/} 
  return (
<div className='parents-conatiner'>

      <div className='heading'>
           <h1>Our Brewing Process</h1>
           <p>Fresh beans, expert brewing, and unforgettable taste.</p>
      </div>

  <div className="img-container">

     <div className="box video-box">
          <video autoPlay muted loop>
          <source src={beans} type="video/mp4" />
          </video>
    </div>
    <div className="box text-box">
              <h2>Fresh Coffee Beans</h2>
               <p> We carefully select premium coffee beans to deliver a rich and smooth flavor
              in every cup. </p> 
    </div>

    <div className="box text-box">
               <h2>Slow Brewing</h2>
               <p>Every coffee is brewed with precision to preserve aroma and create the perfect taste.</p>
    </div>

    <div className="box video-box">
          <video autoPlay muted loop>
          <source src={making} type="video/mp4" />
          </video>
    </div>
  </div>
</div>
  )
}

export default Processmaking
