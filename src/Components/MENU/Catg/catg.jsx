import React, { useContext } from "react";
import { MyCards } from "../../../context/Productcontext";
import { useNavigate } from "react-router-dom";
import "./catg.css";
import Loader from "../../../Pages/loader";
function Catg() {
const API_URL = import.meta.env.VITE_API_URL;
  {/*---------taking state from cotext------------- */} 
  const {
    data,
    ctg,
    price,
    rating,
    search,

  } = useContext(MyCards);
  {/*--------- if product data is not come yet then show loader------------- */} 
   if(data.length === 0){
    return <Loader/>
 }
  const navigate = useNavigate();

  let filterData = data;

  // Category Filter
  if (ctg) {
    filterData = filterData.filter(
      (item) => item.category===ctg

      
    );

    console.log(filterData)
  }


  // Price Filter
  if (price) {
    filterData = filterData.filter(
      (item) => item.price <= Number(price)
    );
  }
  // Rating Filter
  if (rating) {
    filterData = filterData.filter(
      (item) => item.rating === rating
    );
  }
  // search Filter
  if (search) {
    filterData = filterData.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
return (
  <div className="conatiner">

    {
      filterData.length > 0 ? (
        filterData.map((item) => (

          <div
            className="pro-con"
            key={item._id}
            onClick={() => navigate(`/details/${item._id}`)}
          >

            <img
              src={`${API_URL}${item.image}`}
              alt={item.name}
            />

            <div className="details">

              <h1>{item.name}</h1>

              <p>
                Price: ₹{item.price}
              </p>

              <h1>
                {item.rating}⭐
              </h1>

            </div>

          </div>

        ))
      ) : (
        (ctg || price || rating || search) && (
          <div className="nomatch">
          <h2>No Result Found</h2>
          <p>Clear filter</p>
          </div>
        )
      )
    }

  </div>
);}

export default Catg;