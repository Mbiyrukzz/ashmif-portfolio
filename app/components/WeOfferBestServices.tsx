'use client'

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
            <img src="/webapp.png" className="object-cover" alt="headerImage" />
          </div>
          <h1 className="mt-4 text-xl font-semibold ">Web Apps</h1>
          <p className="my-4 text-md font-light max-w-md ">
            Our expertise in a wide range of technologies enables us to develop
            compelling applications for our customers when they are unable to
            satisfy their ever increasing requirements through off-the-shelf
            software. Our business analyst work closely with clients to
            understand their ojectives and define their requirements, after
            which a team of software developers builds, tests and deploys the
            software.
          </p>
          <small className="text-gray-700 hover:border-4 hover:border-[#6c63ff] rounded-lg p-2 hover:font-medium ">
            Read More
          </small>
        </div>

        <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
          <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
            <img
              src="/mobileapp.png"
              className="object-cover"
              alt="headerImage"
            />
          </div>
          <h1 className="mt-4 text-xl font-semibold ">Mobile Apps</h1>
          <p className="my-4 text-md font-light max-w-md ">
            We offer iOS & Android application development services and
            specialize in building powerful, feature-rich mobile applications
            with stunning beautiful interfaces. In today's challenging
            environment, a business not going mobile is going no where. Having
            an innovative out of the box mobile application helps drive customer
            engagement, improve retention and increase revenue.
          </p>
          <small className="text-gray-700 hover:border-4 hover:border-[#6c63ff] rounded-lg p-2 hover:font-medium ">
            Read More
          </small>
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
          <p className="my-4 text-md font-light max-w-md ">
            We offer affordable web design & development solutions ranging from
            a basic personal portfolio website to complex web portals,
            e-commerce websites, and content management systems. Using highest
            quality standards and frameworks, our application developmeng team
            delivers flexible, robust and secure solutions. Some of the key
            features of our website development are secure websites...
          </p>
          <small className="text-gray-700 hover:border-4 hover:border-[#6c63ff] rounded-lg p-2 hover:font-medium">
            Read More
          </small>
        </div>
      </div>
    </div>
  )
}

export default WeOfferBestServices
