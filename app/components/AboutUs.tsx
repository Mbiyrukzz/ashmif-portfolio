'use client'

import { Heading } from '@radix-ui/themes'
import React from 'react'

const AboutUs = () => {
  return (
    <div
      ref={AboutUs}
      id="#about"
      className="bg-[#8338ec] rounded-lg p-3 outline-offset-2 text-white text-center"
    >
      <Heading>About Us</Heading>
    </div>
  )
}

export default AboutUs
