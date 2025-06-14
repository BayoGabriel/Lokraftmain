import Benefits from '@/components/Home/Benefits'
import BlogSection from '@/components/Home/BlogSection'
import FAQ from '@/components/Home/FAQ'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import OurValues from '@/components/Home/OurValues'
import TopRatedArtisans from '@/components/Home/TopRatedArtisans'
import WhoWeAre from '@/components/Home/WhoWeAre'
import React from 'react'
import Navbar from "@/components/shared/Navbar";
import Navigation from "@/components/shared/NavTop";
const HomePage = () => {
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

export default HomePage