import { Box, Grid, Heading } from '@radix-ui/themes'
import { FaCopyright } from 'react-icons/fa'

import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <Grid columns="4" className="border-t p-3">
      <Box className="">
        <Image
          src="/aoslogo.png"
          height="30"
          width="30"
          alt="footerlogo"
          className="text-center mx-1"
        />
        <Box className="flex items-center">
          <p className="mr-1">Copyright</p>
          <FaCopyright />
          <p className="ml-1">2024</p>
        </Box>
        <p>Let Our Solutions Work For You</p>
      </Box>
      <Box></Box>
    </Grid>
  )
}

export default Footer
