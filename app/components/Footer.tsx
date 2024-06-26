'use client'

import { Box, Grid } from '@radix-ui/themes'
import { FaCopyright } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { useState, useEffect } from 'react'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="sm:w-1/2 mx-auto md:w-full">
      <Grid columns="5" className="border-t p-3 px-10">
        <Box className="">
          <Image
            src="/aoslogo.png"
            height="30"
            width="30"
            alt="footerlogo"
            className="text-center ml-9"
          />
          <Box className="flex items-center">
            <p className="mr-1 text-slate-500">Copyright</p>
            <FaCopyright />
            <p className="ml-1 text-slate-500">{year}</p>
          </Box>
          <p className="text-slate-500">Let Our Solutions Work For You</p>
          <p className="text-slate-500">+254715781587/ +254703649140</p>
          <p className="text-slate-500">hello@ashmif.com</p>
        </Box>
        <Box className="space-y-8 tracking-wide pt-5">
          <div>
            <p className="font-bold text-slate-600">Products</p>
            <p className="text-slate-500">
              <Link href="https:/smartfreight.ashmif.com">SmartFreight</Link>
            </p>
            <p className="text-slate-500">
              <Link href="https:/smartrealtors.app">SmartRealtors</Link>
            </p>
            <p className="text-slate-500">
              <Link href="https:/virtuo.ashmif.com">VirtuO</Link>
            </p>
          </div>
        </Box>
        <Box className="space-y-8 tracking-wide pt-5">
          <div>
            <p className="font-bold text-slate-600">Services</p>
            <p className="text-slate-500">
              <Link href="/services/webdesign">Web Design & Development</Link>
            </p>
            <p className="text-slate-500">
              <Link href="/services/webapps">Web Apps</Link>
            </p>
            <p className="text-slate-500">
              <Link href="/services/mobileapp">Mobile Apps</Link>
            </p>
          </div>
        </Box>
        <Box className="space-y-8 tracking-wide pt-5">
          <div>
            <p className="font-bold text-slate-600">Company</p>
            <p className="text-slate-500">
              <Link href="/about">About Us</Link>
            </p>
            <p className="text-slate-500">
              <Link href="/careers">Careers</Link>
            </p>
          </div>
        </Box>
        <Box className="space-y-8 tracking-wide p-8">
          <div>
            <button className="bg-[#6c63ff] rounded-lg text-white p-3 font-semibold hover:text-slate-600 hover:border-[#6c63ff] hover:border-2 hover:bg-white ">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </Box>
      </Grid>
    </footer>
  )
}

export default Footer
