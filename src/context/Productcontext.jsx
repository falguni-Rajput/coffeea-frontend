import { createContext, useEffect, useState } from "react";
const MyCards = createContext();
const API_URL = import.meta.env.VITE_API_URL;
function ProductProvider({ children }) {

const [data, setData] = useState([]);
const [cart,setcart] = useState([])
const [ctg, setctg] = useState('');
const [price, setPrice] = useState('');
const [rating, setRating] = useState('');
const [size, setSize] = useState('');
const [address,setaddress] = useState([])
const[merge,setmerge] = useState([])
const[show,setshow] = useState([])
const [cartId, setCartId] = useState("");
const [search, setsearch] = useState("")

/* --------------------- Fetch coffee products --------------------- */
useEffect(() => {
const getProduct = async () => {
      try {
        const val = await fetch(`${API_URL}/dataget`);
        const res = await val.json();
        setData(res);
      } catch (e) {
           console.error("Product data fetch failed");
      }
    };

getProduct();

  }, []);

/* ------- After login or signup, merge the localStorage cart into the database cart ------- */

useEffect(() => {

  if (merge.length === 0) return;

  const localcartsave = async () => {
    try {
        const localres = await fetch(`${API_URL}/cart/merge`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(merge),
      });

const localdata = await localres.json();

if (!localres.ok || !localdata.data?.length) {
    console.error("Cart fetch failed");
  return;
}

const id = localdata.data[0]._id;
setCartId(id);
/* ----- Clear the localStorage cart after merging it into the database ----- */
localStorage.removeItem("cartstorage");
} catch (e) {
      console.error(e);
    }
  };

localcartsave();

}, [merge]);


/* ------- After login or signup, fetch the user's cart data from the database ------- */

useEffect(() => {
const getcart = async () => {
const token = localStorage.getItem("token");
    // Guest user hai
    if (!token) {
      setshow([]);
      return;
    }
    try {
      const cartdata = await fetch(`${API_URL}/cartget`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const cartres = await cartdata.json();
if (cartdata.status === 401) {
  if (
    cartres.message === "Token Expired" ||
    cartres.message === "Invalid Token"
  ) {
    localStorage.removeItem("token");
    setshow([]);
    return;
  }
}
      setshow(cartres.cart);
    }
    catch (e) {
      console.error(e);
    }
  }
getcart();
}, []);


return (
    <MyCards.Provider value={{data,setctg  ,setPrice,setRating,setSize,setcart,show,setshow, setaddress,setmerge,cartId,  ctg, price, rating,size,search, setsearch ,cart,
}}>
      {children}
    </MyCards.Provider>
  );
}

export { MyCards, ProductProvider };