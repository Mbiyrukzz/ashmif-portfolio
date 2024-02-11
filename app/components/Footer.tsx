import { Box, Grid, Heading } from '@radix-ui/themes'
import { FaCopyright } from 'react-icons/fa'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

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
          <p className="mr-1 text-slate-500">Copyright</p>
          <FaCopyright />
          <p className="ml-1 text-slate-500">2024</p>
        </Box>
        <p className="text-slate-500">Let Our Solutions Work For You</p>
      </Box>
      <Box className="">
        <Link href=""></Link>
      </Box>
    </Grid>
  )
}

export default Footer
