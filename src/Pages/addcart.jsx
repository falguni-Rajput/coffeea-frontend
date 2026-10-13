import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./addcart.css";
import Header from "../Components/Header/Header";
import { MyCards } from "../context/Productcontext";

function Addcart() {
  const API_URL = import.meta.env.VITE_API_URL;

  /* --------------------- React Router navigation --------------------- */
  const navigate = useNavigate();

  /* --------------------- Get cart data from Context --------------------- */
  const { show: contextShow, setshow } = useContext(MyCards);

  /* --------------------- Check if the user is logged in --------------------- */
  const token = localStorage.getItem("token");

  let show;

  /* ------- For guest users, get the cart from localStorage ------- */
  if (!token) {
    const cartdata = localStorage.getItem("cartstorage");
    show = JSON.parse(cartdata) || [];
  } else {
    /* ------- For logged-in users, get the cart from Context ------- */
    show = contextShow;
  }

  /* ------- Redirect to the empty cart page if the cart has no items ------- */
  useEffect(() => {
    if (!show || show.length === 0) {
      navigate("/cartempty", { replace: true });
    }
  }, [show, navigate]);

  /* ------- Handle checkout based on the user's login status ------- */
  const getcheck = (id) => {
    if (!token) {
      navigate("/Signup");
    } else {
      navigate(`/orderpage/${id}`);
    }
  };

  return (
    <div className="addcart-container">
      {/* --------------------- Header --------------------- */}
      <Header />

      <div className="addcart-content">
        <h2 className="bag-text">My Bag</h2>

        <p className="shipping-text">
          Free shipping on the order.
        </p>

        {/* --------------------- Display all cart items --------------------- */}
        {show.map((item) => (
          <div key={item._id}>
            <div className="addcart-deatils">

              {/* --------------------- Product Image --------------------- */}
              <div className="img-addcart">
                <img
                  src={`${API_URL}${item.image}`}
                  alt={item.name}
                />
              </div>

              {/* --------------------- Product Details --------------------- */}
              <div className="text-addcart">
                <h1 className="addcrtpro-name">
                  {item.name}
                </h1>

                <p className="addcart-price">
                  ₹{item.price}
                </p>

                <p className="total-price">
                  Totalprice ₹{item.totalprice}
                </p>

                <p className="options">
                  Select: {item.size}
                </p>

                <p className="addcart-quantity">
                  Quantity: {item.quantity}
                </p>

                {/* --------------------- Checkout Button --------------------- */}
                <button
                  className="addcart-checkout"
                  onClick={() => getcheck(item._id)}
                >
                  Checkout
                </button>
              </div>

            </div>
          </div>
        ))}

        {/* --------------------- Additional Customer Information --------------------- */}
        <div className="important-text">

          {/* ------- Secure Payment ------- */}
          <div className="info-box">
            <div>
              <h4>Secure Payment</h4>
              <p>100% secure checkout with trusted payment methods.</p>
            </div>
          </div>

          {/* ------- Freshly Brewed ------- */}
          <div className="info-box">
            <div>
              <h4>Freshly Brewed</h4>
              <p>Prepared fresh after your order for the best taste.</p>
            </div>
          </div>

          {/* ------- Customer Support ------- */}
          <div className="info-box">
            <div>
              <h4>Customer Support</h4>
              <p>We're here to help with your orders and queries.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Addcart;