import React from 'react'
import './Home.css'
import Header from '../Components/Header/Header'
import Hero from '../Components/HOME/Hero/Hero'
import Processmaking from '../Components/HOME/customers/processmaking'
import Product from  '../Components/HOME/Product/product'
import Choose from '../Components/HOME/Categories/Choose'
import Contact from '../Components/HOME/Contact/contact'
import Footer from '../Components/Header/Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
 <Header></Header>
      <Hero></Hero>
    <Product></Product>
  <Choose></Choose>
<Processmaking></Processmaking>
<Contact></Contact>
<Footer></Footer>
    </div>
  )
}

export default Home
