import { useState } from "react";
import { useParams } from "react-router-dom";
import deliveryImg from "../assets/undraw_delivery-address_409g.svg";
import "./address.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Address() {
  /* --------------------- API Base URL --------------------- */
  const API_URL = import.meta.env.VITE_API_URL;
  /* --------------------- Get order/cart id from URL --------------------- */
  const { id } = useParams();

  /* --------------------- Navigation handler --------------------- */
  const navigate = useNavigate();

  /* --------------------- Store validation error message --------------------- */
  const [error, setError] = useState("");

  /* --------------------- Get user authentication token --------------------- */
  const token = localStorage.getItem("token");


  /* --------------------- Address form states --------------------- */
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");


  /* --------------------- Input validation regex --------------------- */
  const phonerez = /^[6-9]\d{9}$/;
  const addressrez = /^[A-Za-z0-9\s,./#-]{5,100}$/;
  const cityrez = /^[A-Za-z\s]{2,50}$/;
  const ziprez = /^\d{6}$/;


  /* --------------------- Handle address form submission --------------------- */
  async function handleSubmit(e) {
    e.preventDefault();

    /* ------- Validate phone number ------- */
    if (!phonerez.test(phonenumber)) {
      setError("Enter a valid phone number");
      return;
    }

    /* ------- Validate address ------- */
    if (!addressrez.test(address)) {
      setError("Enter a valid address");
      return;
    }

    /* ------- Validate city ------- */
    if (!cityrez.test(city)) {
      setError("Enter a valid city");
      return;
    }

    /* ------- Validate zipcode ------- */
    if (!ziprez.test(zipcode)) {
      setError("Enter a valid zipcode");
      return;
    }

    await sendaddress();
  }


  /* --------------------- Create address object for API request --------------------- */
  const addresitem = {
    name: fullname,
    phonenumber: phonenumber,
    address: address,
    city: city,
    zipcode: zipcode,
  };


  /* --------------------- Send address data to backend --------------------- */
  const sendaddress = async () => {

    try {

      const addressreq = await fetch(`${API_URL}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addresitem)
      });


      /* ------- Convert API response into JSON ------- */
      const res = await addressreq.json();


      /* ------- Address successfully saved ------- */
      if (addressreq.status === 201) {

        toast.success(res.message);

        setFullname("");
        setPhonenumber("");
        setAddress("");
        setCity("");
        setZipcode("");

        navigate(`/orderpage/${id}`);

      }


      /* ------- Handle token expiration or invalid token ------- */
      if (addressreq.status === 401) {

        if (res.message === "Token Expired") {

          localStorage.removeItem("token");
          navigate("/Login");

        }


        if (res.message === "Invalid Token") {

          localStorage.removeItem("token");
          navigate("/Login");

        }

        else {

          toast.error(res.message);

        }

      }


    } catch (e) {

      /* ------- Handle API/network errors ------- */
      toast.error(e.message);

    }

  };


  return (

    <div className="address-conatiner">

      {/* --------------------- Delivery Illustration --------------------- */}
      <div className="img-box">
        <img 
          className="img-delivery" 
          src={deliveryImg} 
          alt="delivery" 
        />
      </div>


      {/* --------------------- Delivery Address Form Container --------------------- */}
      <div className="address-container">


        {/* ------- Page Heading ------- */}
        <div className="address-heading">

          <h1>Delivery Address</h1>

          <p>
            Please enter your delivery details to continue your order.
          </p>

        </div>



        {/* --------------------- Address Form --------------------- */}
        <form 
          className="address-form" 
          onSubmit={handleSubmit}
        >


          {/* ------- Full Name Input ------- */}
          <label htmlFor="fullname">
            Full Name
          </label>

          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e)=>{ 
              setFullname(e.target.value),
              setError("")
            }}
            required
          />


          {/* ------- Phone Number Input ------- */}
          <label htmlFor="phonenumber">
            Phone Number
          </label>

          <input
            type="text"
            id="phonenumber"
            value={phonenumber}
            onChange={(e)=>{ 
              setPhonenumber(e.target.value),
              setError("")
            }}
            required
          />



          {/* ------- Address Input ------- */}
          <label htmlFor="address">
            Address
          </label>

          <input
            type="text"
            id="address"
            value={address}
            onChange={(e)=> { 
              setAddress(e.target.value),
              setError("")
            }}
            required
          />



          {/* ------- City Input ------- */}
          <label htmlFor="city">
            City
          </label>

          <input
            type="text"
            id="city"
            value={city}
            onChange={(e)=>{ 
              setCity(e.target.value),
              setError("")
            }}
            required
          />



          {/* ------- Zipcode Input ------- */}
          <label htmlFor="zipcode">
            Zipcode
          </label>

          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e)=>{ 
              setZipcode(e.target.value),
              setError("")
            }}
            required
          />


          {/* --------------------- Submit Button --------------------- */}
          <button type="submit">
            Submit
          </button>



          {/* --------------------- Display Validation Error --------------------- */}
          <div className="error-address">

            {error && <p>{error}</p>}

          </div>


        </form>

      </div>

    </div>

  );

}

export default Address;