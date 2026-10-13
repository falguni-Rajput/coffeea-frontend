import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyCards } from "../context/Productcontext";
import "./signup.css";

const API_URL = import.meta.env.VITE_API_URL;


function Signup() {

const {setmerge, cartId} = useContext(MyCards);

const {id} = useParams();

const navigate = useNavigate();

const [error,seterror] = useState();


// Form validation regex
const phrez = /^[6-9]\d{9}$/;
const emailrez = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pwrez = /^.{6,}$/;


// Signup form states
const [name, setname] = useState("");
const [ph, setph] = useState("");
const [email, setemail] = useState("");
const [pw, setpw] = useState("");


// After cart merge redirect user to address page
useEffect(() => {

  if (cartId) {

    setTimeout(() => {

      navigate(`/address/${cartId}`);

    },1900);

  }

}, [cartId]);


// Send signup data to backend
const sendsign = async () => {

  const signitem = {

    name:name,
    phonenumber:ph,
    email:email,
    password:pw

  };


  try {

    const signreq = await fetch(`${API_URL}/signup`, {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(signitem)

    });


    const signres = await signreq.json();


    // Signup successful
    if(signreq.status==201){

      toast.success(signres.message);

      localStorage.setItem("token",signres.token);

      return true;

    }

    else{

      toast.error(signres.message);

      return false;

    }


  }

  catch(e){

    toast.error("Something went wrong");

    return false;

  }

};



// Handle signup form submit
async function check(e){

e.preventDefault();


// Name validation
if(name.trim()===""){

 seterror("Name feild is required");

 return;

}


// Phone validation
if(ph.trim()===""){

 seterror("Phone number feild is required");

 return;

}

if(!phrez.test(ph)){

 seterror("Enter a valid phone number");

 return;

}


// Email validation
if(email.trim()===""){

 seterror("Email feild is required");

 return;

}

if(!emailrez.test(email)){

 seterror("Enter a valid email");

 return;

}


// Password validation
if(pw.trim()===""){

 seterror("Password feild is required");

 return;

}

if(!pwrez.test(pw)){

 seterror("Password must be at least 6 characters");

 return;

}



const success = await sendsign();


if(success){


setname("");
setph("");
setemail("");
setpw("");


// Merge guest cart after signup
const localCart = JSON.parse(localStorage.getItem("cartstorage")) || [];


if(localCart.length > 0){

 setmerge(localCart);

}

else{

 navigate("/");

}


}

}


return (

<div className="signup-container">


<h1>Welcome To</h1>

<h2>Coffee</h2>


<div className="signup-outer">


<form className="signup-form" onSubmit={check}>


<label>Full Name</label>

<input
type="text"
value={name}
placeholder="Enter your full name"
onChange={(e)=>{

setname(e.target.value);

seterror("");

}}
/>


<label>Phone Number</label>

<input
type="tel"
value={ph}
placeholder="Enter your phone number"
onChange={(e)=>{

setph(e.target.value);

seterror("");

}}
/>


<label>Email</label>

<input
type="email"
value={email}
placeholder="Enter your email"
onChange={(e)=>{

setemail(e.target.value);

seterror("");

}}
/>


<label>Password</label>

<input
type="password"
value={pw}
placeholder="Enter your password"
onChange={(e)=>{

setpw(e.target.value);

seterror("");

}}
/>



<button type="submit" id="signup">

Sign Up

</button>


</form>



<div className="right-sign">


<div className="other-text">


<h2>Hello, Friend!</h2>


<p>
Already have an account?
<br/>
Login and continue your coffee journey.
</p>



<button
className="login-btn"
onClick={()=>navigate(`/login`)}
>

Log In

</button>


</div>



{/* Display validation error */}
{error && (

<div className="error-sign">

<p>{error}</p>

</div>

)}



</div>


</div>


</div>

);

}


export default Signup;