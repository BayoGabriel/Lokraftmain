import Benefits from '@/views/home_view/home_view_components/Benefits'
import BlogSection from '@/views/home_view/home_view_components/BlogSection'
import FAQ from '@/views/home_view/home_view_components/FAQ'
import Footer from '@/components/layout/Footer'
import Hero from '@/views/home_view/home_view_components/Hero'
import HowItWorks from '@/views/home_view/home_view_components/HowItWorks'
import OurValues from '@/views/home_view/home_view_components/OurValues'
import TopRatedArtisans from '@/views/home_view/home_view_components/TopRatedArtisans'
import WhoWeAre from '@/views/home_view/home_view_components/WhoWeAre'
import React from 'react'
import Navbar from "@/components/layout/Navbar";
import Navigation from "@/components/layout/Navigation";


const Home_View = () => {
  return (
    <>
        <Navigation/>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <HowItWorks/>
        <WhoWeAre/>
        <OurValues/>
        <FAQ/>
        <TopRatedArtisans/>
        <BlogSection/>
        <Footer/>
    </>
  )
}

export default Home_View