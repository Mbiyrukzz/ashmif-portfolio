'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MainContent = () => {
  return (
    <div className="text-center flex-row">
      <h1 className="pt-5 m-auto font-normal text-center text-6xl">
        Life is simple{' '}
        <p className="text-[#eca400ff] font-semibold">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={50}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </h1>
    </div>
  )
  // return (
  //   <div className="space-y-5">
  //     <p className="text-3xl items-center text-center font-extrabold">
  //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
  //       saepe fugit pariatur ipsam dignissimos officiis architecto culpa
  //       accusantium tempora possimus cum eius delectus quisquam dolorum
  //       recusandae voluptatem impedit maiores non!
  //     </p>
  //     <p className="text-4xl text-center">"Let OUR Solutions WORK For YOU!"</p>
  //   </div>
  // )
}

export default MainContent
