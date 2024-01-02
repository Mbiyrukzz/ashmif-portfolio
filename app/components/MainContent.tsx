'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MainContent = () => {
  return (
    <div className="text-center flex-row space-y-10">
      <div>
        {' '}
        <h1 className="pt-5 m-auto font-normal text-center text-6xl">
          Innovate your Business with Custom{' '}
          <p className="text-[#8338ec] font-semibold">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                'Web Apps',
                'Mobile Apps',
                'Desktop Apps',
                'Ashmif Office Solutions!',
              ]}
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
      <div>
        <p className="text-2xl text-center text-slate-600">
          "Let OUR Solutions WORK For YOU!"
        </p>
      </div>
      <div>
        <p className="text-2xl text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nemo laudantium necessitatibus ipsam.
        </p>
      </div>
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
