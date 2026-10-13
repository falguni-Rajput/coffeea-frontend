
import { useContext } from "react";
import { MyCards } from "../../../context/Productcontext";
import { useNavigate } from "react-router-dom";
import './product.css'
import Loader from "../../../Pages/loader";
function Product() {
  const navigate = useNavigate()
const { data } = useContext(MyCards);
  {/*--------- if product data is not come yet then show loader------------- */} 
 if(data.length === 0){
    return <Loader/>
 }
const API_URL = import.meta.env.VITE_API_URL;
  return (

   <div className='prodcut-conatiner'>
     <div className='heading-latest'>
     <h1>Discover Our Delicious Menu</h1>
<p>Freshly brewed coffee and handcrafted treats .</p>
     </div>
      <div className='product'>
 
        {data?.map((item) => (
  item.type === "Best Seller" ? (
    <div className="card" key={item._id}>
      <img src={`${API_URL}${item.image}`} onClick={()=>navigate(`/details/${item._id}`)}></img>
     <div className="card-text"> 
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <p>{item.rating}</p>
     </div>
    </div>
  ) : null
))}
          
      </div>

    </div>
    
       
  )
}

export default Product