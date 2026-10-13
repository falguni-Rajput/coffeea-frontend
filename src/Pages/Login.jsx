import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MyCards } from "../context/Productcontext";
import "./Login.css";


function Login() {


  /* --------------------- API URL and required hooks --------------------- */
  const API_URL = import.meta.env.VITE_API_URL;

  const {id} = useParams();

  const navigate = useNavigate();


  /* ------- Get cart merge function and cart id from context ------- */
  const {setmerge, cartId} = useContext(MyCards);



  /* --------------------- Input validation regex --------------------- */
  const emailrez = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pwrez = /^.{6,}$/;



  /* --------------------- Login form states --------------------- */
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  /* ------- After cart merge, redirect user to order page ------- */
  useEffect(()=>{

    if(cartId){

      setTimeout(() => {

        navigate(`/orderpage/${id}`);

      },1900);

    }

  },[cartId]);




  /* --------------------- Handle user login --------------------- */
  async function handleLogin(e) {

    e.preventDefault();



    /* ------- Validate email field ------- */
    if (email.trim() === "") {

      setError("Email is required");

      return;

    }



    if (!emailrez.test(email)) {

      setError("Enter a valid email");

      return;

    }




    /* ------- Validate password field ------- */
    if (password.trim() === "") {

      setError("Password is required");

      return;

    }



    if (!pwrez.test(password)) {

      setError("Password must be at least 6 characters");

      return;

    }




    /* ------- Create login request object ------- */
    const loginitem = {

      email: email,

      password: password,

    };





    /* --------------------- Login API call --------------------- */
    const logincheck = async () => {

      try {


        const loginreq = await fetch(`${API_URL}/login`, {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify(loginitem),

        });




        /* ------- Get response data from backend ------- */
        const logindata = await loginreq.json();




        /* ------- Login successful ------- */
        if (loginreq.status === 200) {


          toast.success(logindata.message);


          /* ------- Store authentication token ------- */
          localStorage.setItem("token", logindata.token);


          setEmail("");

          setPassword("");


        }


        else {


          toast.error(logindata.message);

          return;


        }




        /* --------------------- Handle guest cart after login --------------------- */
        const localCart = JSON.parse(localStorage.getItem("cartstorage")) || [];



        if (localCart.length > 0) {


          /* ------- Merge guest cart into user cart ------- */
          setmerge(localCart);


        } 

        else {


          navigate("/");


        }




      } catch (e) {


        /* ------- Handle login error ------- */
        toast.error("something is went wrong try again");


      }

    };



    await logincheck();

  }





  return (

    <div className="login-container">


      {/* --------------------- Login Heading --------------------- */}
      <h1>
        Welcome Back
      </h1>


      <h2>
        Coffee
      </h2>




      <div className="login-outer">


        {/* --------------------- Login Form --------------------- */}
        <form 
          className="login-form" 
          onSubmit={handleLogin}
        >



          <label>
            Email
          </label>


          <input

            type="email"

            value={email}

            placeholder="Enter your email"

            onChange={(e) => {

              setEmail(e.target.value);

              setError("");

            }}

          />




          <label>
            Password
          </label>



          <input

            type="password"

            value={password}

            placeholder="Enter your password"

            onChange={(e) => {

              setPassword(e.target.value);

              setError("");

            }}

          />




          <p className="forgot">
            Forgot Password?
          </p>




          <button 
            type="submit" 
            id="login"
          >

            Login

          </button>



        </form>

        {/* --------------------- Signup Section --------------------- */}
        <div className="right-login">


          <div className="login-text">


            <h2>
              Hello, Friend!
            </h2>



            <p>

              Don't have an account?

              <br />

              Create one and enjoy your coffee journey.

            </p>




            <button

              className="signup-btn"

              onClick={()=>navigate(`/Signup`)}

            >

              Sign Up

            </button>



          </div>





          {/* --------------------- Display Validation Error --------------------- */}
          <div className="error-login">

            {error && <h3>{error}</h3>}

          </div>



        </div>



      </div>


    </div>

  );

}


export default Login;