import React from 'react'
import CarouselSection from './components/homepage/CarouselSection'
import Delivery from './components/homepage/Delivery'
import DisplayProduct from './components/homepage/DisplayProduct'
import Features from './components/homepage/Features'
import Footer from './components/homepage/Footer'
import Logo from './components/homepage/Logo'
import NavBarPage from './components/homepage/NavBar'
import NavItem from './components/homepage/NavItem'
import News from './components/homepage/News'
import Product from './components/homepage/Product'
import SearchForm from './components/homepage/SearchForm'
import Slider from './components/homepage/SliderPage'
import TopFooter from './components/homepage/TopFooter'
import TopNav from './components/homepage/TopNav'


function Home() {
    return (
        <div>
            <TopNav />
            < Logo />
            < NavBarPage />
            <Slider />
            < CarouselSection />
            <NavItem />
            <Product />
            <DisplayProduct />
            <Delivery />
            <News/>
            <Features />
            <SearchForm />
            < hr />
            <TopFooter />
            <hr />
            <Footer />
        </div>
    )
}

export default Home
