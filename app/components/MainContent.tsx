'use client'

import { Box, Grid } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MainContent = () => {
  return (
    <Grid columns="2" gap="5" className="justify-between p-10">
      <Box>
        <div className="text-start flex-row space-y-10">
          <h1 className="pt-5 m-auto font-normal text-start text-6xl">
            Innovate your Business with Custom{' '}
            <p className="text-[#6c63ff] font-semibold">
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
          <p className="text-2xl text-start pt-3 text-slate-600">
            "Let OUR Solutions WORK For YOU!"
          </p>
        </div>
        <div>
          <p className="text-2xl pt-4 text-slate-800">
            Constantly working to upgrade existing solutions & Develop new
            products.
          </p>
        </div>
      </Box>
      <Box>
        <Image
          src="/weapp.png"
          height="720"
          width="560"
          alt="mainphoto"
          className="border-4 rounded-2xl border-[#6c63ff]"
        />
      </Box>
    </Grid>
  )
}

export default MainContent
