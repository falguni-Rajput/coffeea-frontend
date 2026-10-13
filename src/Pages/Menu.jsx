import React from 'react'
import Header from '../Components/Header/Header'
import Bigmenu from '../Components/MENU/Bigmenu'
import Footer from '../Components/Header/Footer/Footer'
import "./Menu.css"
function Menu() {
  return (
    <div className='menu'>
   <Header></Header>
<Bigmenu></Bigmenu>
<Footer></Footer>
    </div>
  )
}

export default Menu
