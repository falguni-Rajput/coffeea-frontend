import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import "./order.css";


function Order() {


  /* --------------------- API URL and router hooks --------------------- */
  const API_URL = import.meta.env.VITE_API_URL;

  const {id} = useParams();

  const navigate = useNavigate();



  /* --------------------- Order and address states --------------------- */
  const [orderpro, setorderpro] = useState({});

  const [addreorder, setAddreorder] = useState(null);



  /* --------------------- Payment method state --------------------- */
  const [payment, setPayment] = useState("Cash on Delivery");




  /* --------------------- Fetch order product and address details --------------------- */
  useEffect(()=>{


    const orderfun = async()=>{


      try{


        const orderreq = await fetch(`${API_URL}/orderpage/${id}`,{

          method:"GET",

          headers: {

            Authorization: `Bearer ${localStorage.getItem("token")}`

          }

        });



        /* ------- Convert response into JSON ------- */
        const orderres = await orderreq.json();




        /* ------- Store cart and address data ------- */
        if(orderreq.status==200){

          setorderpro(orderres.cart);

          setAddreorder(orderres.address);

        }



      }

      catch(e){

        console.log(e);

      }


    }



    orderfun();


  },[id]);




  /* --------------------- Create order object for backend --------------------- */
  const orderobj = {

    name: orderpro.name,

    image: orderpro.image,

    price: orderpro.price,

    quantity: orderpro.quantity,

    size: orderpro.size,


    fullname: addreorder?.name,

    phonenumber: addreorder?.phonenumber,

    address: addreorder?.address,

    city: addreorder?.city,

    zipcode: addreorder?.zipcode,


    paymentMethod: payment,

  };





  /* --------------------- Submit final order --------------------- */
  const submitorder = async()=>{


    try{


      const submitorderreq = await fetch(`${API_URL}/ordersubmit`, {


        method: "POST",


        headers: {


          "Content-Type": "application/json",

          Authorization: `Bearer ${localStorage.getItem("token")}`


        },


        body: JSON.stringify(orderobj)


      });





      /* ------- Get backend response ------- */
      const submitorderres = await submitorderreq.json();




      /* ------- Navigate to order confirmation after success ------- */
      if(submitorderreq.status==201){

        navigate(`/orderconfirm`);

      }




      /* ------- Handle token error ------- */
      if(submitorderreq.status===401){


        if (submitorderres.message === "Token Expired") {

          localStorage.removeItem("token");

        }



        if (submitorderres.message === "Invalid Token") {

          localStorage.removeItem("token");

        }


      }


      else{


        console.log(submitorderres);


      }


    }


    catch(e){


      console.log("erro",e);


    }


  }





  return (

    <div className="order-conatiner">


      {/* --------------------- Header Section --------------------- */}
      <Header />



      <div className="order-card">





        {/* --------------------- Product Details Section --------------------- */}
        <div className="order-product">


          <img

            src={`${API_URL}${orderpro.image}`}

            alt="Product"

          />



          <div className="product-info">


            <h2>
              {orderpro.name}
            </h2>



            <p className="product-price">
              {orderpro.price}
            </p>



            <p className="product-qty">

              Quantity : <span>{orderpro.quantity}</span>

            </p>



          </div>





          {/* --------------------- Payment Selection --------------------- */}
          <div className="payment-select">


            <label>
              Select Payment Method
            </label>



            <select

              value={payment}

              onChange={(e)=>setPayment(e.target.value)}

            >


              <option>
                Cash on Delivery
              </option>


            </select>



          </div>






          {/* --------------------- Delivery Address Section --------------------- */}
          <div className="address-change">


            <div className="change-text">



              {addreorder ? (


                <>


                  {/* ------- Display saved address ------- */}
                  <div className="address-details">


                    <h3>
                      Delivery Address
                    </h3>



                    <p>{addreorder.name}</p>

                    <p>{addreorder.phonenumber}</p>

                    <p>{addreorder.address}</p>

                    <p>{addreorder.city}</p>

                    <p>{addreorder.zipcode}</p>


                  </div>





                  {/* ------- Edit existing address ------- */}
                  <button

                    className="change-btn"

                    onClick={() => navigate(`/address/${id}`)}

                  >

                    Edit

                  </button>



                </>


              ) : (



                <>


                  {/* ------- Ask user to add address ------- */}
                  <div className="address-details">


                    <h3>
                      Delivery Address
                    </h3>



                    <p>
                      Please fill your address first.
                    </p>



                  </div>




                  <button

                    className="change-btn"

                    onClick={() => navigate(`/address/${id}`)}

                  >

                    Fill Address

                  </button>




                </>



              )}



            </div>


          </div>






          {/* --------------------- Order Total and Confirmation --------------------- */}
          <div className="order-confirmed">


            <div className="total-price">


              <h3>
                Total Amount
              </h3>



              <h1>
                {orderpro.totalprice}
              </h1>



            </div>




            <button 

              type="submit" 

              onClick={submitorder}

            >

              Confirm Order

            </button>



          </div>



        </div>


      </div>


    </div>

  );

}


export default Order;