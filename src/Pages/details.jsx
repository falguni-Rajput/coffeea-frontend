import React, { useContext, useState } from "react";
import "./details.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { MyCards } from "../context/Productcontext";
import Footer from "../Components/Header/Footer/Footer";


function Details() {

  /* --------------------- API Base URL --------------------- */
  const API_URL = import.meta.env.VITE_API_URL;


  /* --------------------- Get product id from URL --------------------- */
  const { id } = useParams();


  /* --------------------- Product quantity and size states --------------------- */
  const [qun, setqun] = useState(1);
  const [options, setoptions] = useState("Small");


  /* --------------------- Get products data and cart function from Context --------------------- */
  const { data, setcart } = useContext(MyCards);


  /* --------------------- Find selected product using id --------------------- */
  const product = data.find((item) => item._id === id);



  /* --------------------- Show loader when product data is not available --------------------- */
  if(!product){
    return <Loader />
  }



  /* --------------------- Add product to cart function --------------------- */
  const addtocart = async () => {


    /* ------- Create cart item object ------- */
    const item = {

      name: product.name,
      category: product.category,
      price: product.price,
      rating: product.rating,
      type: product.type,
      description: product.description,
      image: product.image,
      quantity: qun,
      size: options,

      totalprice: product.price * qun,

    };



    /* ------- Check user login status ------- */
    const token = localStorage.getItem("token");



    /* ------- Save cart item for guest users in localStorage ------- */
    if (!token) {


      const oldCart =
        JSON.parse(localStorage.getItem("cartstorage")) || [];


      oldCart.push(item);


      localStorage.setItem(
        "cartstorage",
        JSON.stringify(oldCart)
      );


      toast.success("Added to your bag!");

      return;

    }



    /* ------- Update cart state using Context API ------- */
    setcart((prev) => [...prev,item]);



    /* ------- Save logged-in user's cart item into backend ------- */
    try {


      const senddata = await fetch(`${API_URL}/cart`, {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`

        },

        body: JSON.stringify(item)

      });



      /* ------- Convert backend response into JSON ------- */
      const ans = await senddata.json();



      /* ------- Show success message after cart save ------- */
      if(senddata.status===201){

        toast.success(ans.message);

      }

      else{

        toast.error(ans.message || "Backend error");

      }


    }


    catch(e){

      /* ------- Handle frontend or network errors ------- */
      console.error("Frontend error:", e);

    }


  }




  return (

    <div className="details-conatiner">


      {/* --------------------- Website Header --------------------- */}
      <Header />



      <div className="pic-text">



        {/* --------------------- Product Image Section --------------------- */}
        <div className="img">

          <img

            src={`${API_URL}${product.image}`}

            alt={product.name}

          />

        </div>




        {/* --------------------- Product Details Section --------------------- */}
        <div className="text-details">



          {/* ------- Product Name ------- */}
          <h1 className="product-name">

            {product.name}

          </h1>




          {/* ------- Product Price ------- */}
          <h2 className="price">

            ₹{product.price}

          </h2>




          {/* ------- Product Description ------- */}
          <p className="description">

            {product.description}

          </p>




          {/* ------- Product Size Selection ------- */}
          <select

            className="size"

            onChange={(e)=>setoptions(e.target.value)}

          >

            <option value="Small">Small</option>

            <option value="Medium">Medium</option>

            <option value="Large">Large</option>


          </select>




          {/* --------------------- Quantity Section --------------------- */}
          <div className="quantity-box">


            <p className="qunatity">

              Quantity

            </p>



            <div className="value">


              {/* ------- Decrease Quantity Button ------- */}
              <button

                onClick={() => {

                  if (qun > 1) {

                    setqun(qun - 1);

                  }

                }}

              >

                -

              </button>




              {/* ------- Current Quantity Value ------- */}
              <span>

                {qun}

              </span>




              {/* ------- Increase Quantity Button ------- */}
              <button

                onClick={() => {

                  setqun(qun + 1);

                }}

              >

                +

              </button>



            </div>


          </div>




          {/* --------------------- Add To Cart Button --------------------- */}
          <button

            className="cart-btn"

            onClick={()=>addtocart()}

          >

            Add To Cart

          </button>




        </div>


      </div>



      {/* --------------------- Website Footer --------------------- */}
      <Footer />


    </div>

  );

}


export default Details;