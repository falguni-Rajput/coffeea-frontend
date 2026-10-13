
import './Bigmenu.css'
import "./Bigmenu.css";
import Header from "../Header/Header";
import Catg from "./Catg/catg.jsx";
import Filter from "./filter/Filter.jsx";
import Mobilefilter from "./mobile/mobilefilter.jsx";
import { useContext } from 'react';
import { MyCards } from '../../context/Productcontext.jsx';
function Bigmenu() {
   const {setsearch} = useContext(MyCards)
  return (
<div className='bigmenu'>
      


<div className='search-box'>
  <input type='text' placeholder='    Enter any search'  onChange={(e)=>setsearch(e.target.value)}></input>
</div>

<div className='combine-container'>

<Filter></Filter>
<Mobilefilter></Mobilefilter>
<Catg></Catg>

</div>
 
 </div>
  )
}

export default Bigmenu
