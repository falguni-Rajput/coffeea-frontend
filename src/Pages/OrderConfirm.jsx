import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import "./orderconfirm.css";
import { useNavigate } from "react-router-dom";


function OrderConfirm() {

  /* --------------------- API URL and navigation --------------------- */
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  /* --------------------- Store order details --------------------- */
  const [order, setorder] = useState(null);

  /* --------------------- Fetch confirmed order details --------------------- */
  useEffect(() => {

    const orderdetails = async () => {

      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      try {

        /* ------- Get order data from backend ------- */
        const orderreq = await fetch(

          `${API_URL}/myorder`,

          {

            method: "GET",

            headers: {

              Authorization: `Bearer ${localStorage.getItem("token")}`,

            },

          }

        );

        /* ------- Convert response into JSON ------- */
        const orderres = await orderreq.json();

        /* ------- Store order data after successful response ------- */
        if (orderreq.status === 200) {

          setorder(orderres.orderdata);

        }

      } catch (e) {


        /* ------- Handle fetch error ------- */
        console.log(e);

      }

    };

    orderdetails();
  }, []);

  return (

    <div className="confirm-container">



      <div className="confirm-card">



        {/* --------------------- Order Success Icon --------------------- */}
        <FaCheckCircle className="success-icon"/>

        {/* --------------------- Confirmation Message --------------------- */}
        <h1>
          Order Confirmed
        </h1>
        <p className="thank-you">

          Thank you! Your coffee is being prepared.

        </p>






        {/* --------------------- Delivery Time Section --------------------- */}
        <div className="delivery-box">


          <FaClock />


          <div>


            <h3>
              Estimated Delivery
            </h3>



            <p>
              20-25 minute
            </p>



          </div>



        </div>







        {/* --------------------- Ordered Product Details --------------------- */}
        <div className="product-box">



          {

            order?.image && (

              <img

                src={`${API_URL}${order.image}`}

                alt={order.name}

              />

            )

          }




          <div>



            <h2>
              {order?.name}
            </h2>



            <p>
              ₹ {order?.price}
            </p>



            <p>
              Quantity : {order?.quantity}
            </p>



            <p>
              Size : {order?.size}
            </p>




          </div>



        </div>







        {/* --------------------- Delivery Address Section --------------------- */}
        <div className="address-box">



          <div className="address-title">


            <FaMapMarkerAlt />


            <h3>
              Delivery Address
            </h3>



          </div>




          <p>
            {order?.fullname}
          </p>


          <p>
            {order?.phonenumber}
          </p>


          <p>
            {order?.address}
          </p>


          <p>
            {order?.city}
          </p>


          <p>
            {order?.zipcode}
          </p>




        </div>







        {/* --------------------- Order Summary Information --------------------- */}
        <div className="order-info">



          {/* ------- Order ID ------- */}
          <div>


            <span>
              Order ID
            </span>



            <strong>

              {order?._id}

            </strong>



          </div>






          {/* ------- Payment Method ------- */}
          <div>


            <span>
              Payment
            </span>



            <strong>

              {order?.paymentMethod}

            </strong>



          </div>







          {/* ------- Total Amount ------- */}
          <div>


            <span>
              Total
            </span>



            <strong>

              ₹ {order?.price * order?.quantity}

            </strong>



          </div>




        </div>






        {/* --------------------- Continue Shopping Button --------------------- */}
        <button 

          onClick={() => navigate(`/menu`)}

        >

          Continue

        </button>





      </div>



    </div>

  );

}


export default OrderConfirm;