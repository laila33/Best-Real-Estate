import Discover_Properties from '@/components/Discover_Properties'
import Featured_Properties from '@/components/Featured_Properties'
import Hero_Section from '@/components/Hero-Section'
import NavBar from '@/components/NavBar'
import Save_Your_Money from '@/components/Save_Your_Money'
import React from 'react'

function page() {
  return (
    <div>
      <NavBar />
      <Hero_Section />
      <Discover_Properties />
      <Featured_Properties/>
      <Save_Your_Money />
    </div>
  )
}

export default page