import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import CategoriesBar from '../components/CategoriesBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <CategoriesBar/>
        <Slider/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home