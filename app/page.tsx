import BlogPost from '@/components/BlogPost'
import Customer from '@/components/Customer'
import Discover_Properties from '@/components/Discover_Properties'
import Featured_Properties from '@/components/Featured_Properties'
import Footer from '@/components/Footer'
import Hero_Section from '@/components/Hero-Section'
import NavBar from '@/components/NavBar'
import Property_History from '@/components/Property_History'
import Save_Your_Money from '@/components/Save_Your_Money'
import Why_People_Choose_Property from '@/components/Why_People_Choose Property'
import React from 'react'

function page() {
  return (
    <div>
      {/* <NavBar /> */}
      <Hero_Section />
      <Discover_Properties />
      <Featured_Properties/>
      <Save_Your_Money />
      <Why_People_Choose_Property />
      <Property_History />
      <Customer />
      <BlogPost />
      {/* <Footer /> */}
    </div>
  )
}

export default page