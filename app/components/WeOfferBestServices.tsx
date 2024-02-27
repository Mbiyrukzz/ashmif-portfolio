'use client'

import { Box, Card, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const WeOfferBestServices = () => {
  return (
    <div className="blog-container py-10 dark:bg-gray-700 transition duration-500">
      <div className="relative max-w-5xl lg:mx-auto mx-2">
        <div className="breadcrumb text-sm text-gray-900 font-normal flex flex-row space-x-2 my-2 dark:text-gray-50">
          <a href="#">Blogs</a>
          <p></p>
          <a href="#">✌️ Technical Blog For Developers</a>
        </div>
        <div className="relative blog-header-image rounded-lg shadow-lg overflow-hidden h-48 object-cover">
          <img
            src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
            className="object-cover"
            alt="headerImage"
          />
        </div>
        <span
          aria-label="emoji"
          className="absolute left-1/2 -bottom-5 text-6xl z-10"
        >
          🍁
        </span>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center font-bold text-gray-600 text-4xl mt-10 dark:text-gray-50">
          Technical Blogs For Developers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
            <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
              <img
                src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                className="object-cover"
                alt="headerImage"
              />
            </div>
            <h1 className="mt-4 text-xl font-semibold dark:text-gray-50">
              Clearing The JavaScript Interview
            </h1>
            <p className="my-4 text-sm font-light max-w-md dark:text-gray-50">
              From promises to closures, we have covered it all in our new blog
              post which covers most of the...
            </p>
            <small className="text-gray-500 dark:text-gray-50">
              June 10th, 2021
            </small>
          </div>

          <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
            <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
              <img
                src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                className="object-cover"
                alt="headerImage"
              />
            </div>
            <h1 className="mt-4 text-xl font-semibold dark:text-gray-50">
              Design System
            </h1>
            <p className="my-4 text-sm font-light max-w-md dark:text-gray-50">
              Having a design system in place is as crucial as having milk for
              tea, some prefer it and some don't...
            </p>
            <small className="text-gray-500 dark:text-gray-50">
              May 17th, 2021
            </small>
          </div>

          <div className="blog-card flex flex-col items-center md:items-start cursor-pointer">
            <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
              <img
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                className="object-cover"
                alt="headerImage"
              />
            </div>
            <h1 className="mt-4 text-xl font-semibold dark:text-gray-50">
              React and Angular
            </h1>
            <p className="my-4 text-sm font-light max-w-md dark:text-gray-50">
              We will dive deeper into the nuts and bolts of modern day
              frameworks like React, Angular and Vue...
            </p>
            <small className="text-gray-500 dark:text-gray-50">
              May 17th, 2021
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeOfferBestServices
