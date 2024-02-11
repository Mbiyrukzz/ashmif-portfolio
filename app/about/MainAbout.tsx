import { Box, Heading } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const MainAbout = () => {
  return (
    <Box className="text-center items-center">
      <Heading className="mt-4 mb-5 font-bold text-6xl">
        We're Here To Make Your Work Much Easier
      </Heading>
      <Box className="flex justify-center">
        <Image
          src="/mainabout.svg"
          height="1120"
          width="920"
          alt="mainphoto"
          className="text-center mt-4"
        />
      </Box>
    </Box>
  )
}

export default MainAbout
