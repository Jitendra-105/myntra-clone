import React from 'react'
import '../Home/Home.css'
import Navbar from '../Navbar/Navbar';
import Banner from "../Banners/Banner"
import CardWork from '../Cards/CardWork';
import Category from '../Category/Category';
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <CardWork/>
      <Category/>
      <Footer/>
    </div>

  )
}

export default Home;