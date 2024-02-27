'use client'

import { Box, Card, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const WeOfferBestServices = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-gray-900 text-4xl mt-10 ">
        We Provide The Best Services In
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
          <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
            <img src="/weapp.png" className="object-cover" alt="headerImage" />
          </div>
          <h1 className="mt-4 text-xl font-semibold ">Web Apps</h1>
          <p className="my-4 text-sm font-light max-w-md ">
            From promises to closures, we have covered it all in our new blog
            post which covers most of the...
          </p>
          <small className="text-gray-500 ">Read More</small>
        </div>

        <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
          <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
            <img
              src="/mobileapp.png"
              className="object-cover"
              alt="headerImage"
            />
          </div>
          <h1 className="mt-4 text-xl font-semibold ">Mobile & Desktop Apps</h1>
          <p className="my-4 text-sm font-light max-w-md ">
            Having a design system in place is as crucial as having milk for
            tea, some prefer it and some don't...
          </p>
          <small className="text-gray-500 ">Read More</small>
        </div>

        <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
          <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
            <img
              src="/website.png"
              className="object-cover"
              alt="headerImage"
            />
          </div>
          <h1 className="mt-4 text-xl font-semibold ">
            Web Design & Development
          </h1>
          <p className="my-4 text-sm font-light max-w-md ">
            We will dive deeper into the nuts and bolts of modern day frameworks
            like React, Angular and Vue...
          </p>
          <small className="text-gray-500 ">Read More</small>
        </div>
      </div>
    </div>
  )
}

export default WeOfferBestServices
