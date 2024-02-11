import { Box, Flex } from '@radix-ui/themes'
import React from 'react'

const OurStory = () => {
  return (
    <Flex gap="1">
      <Box className="mt-4 p-8 flex justify-around">
        <div className="w-1/2 p-2">
          <p className="text-xl font-normal tracking-wide  text-slate-600">
            Ashmif Office Solutions LTD is an IT Solutions & Software Company
            based in Mombasa providing custom software development, website
            design and development, mobile and desktop apps development and
            graphic designing. With a team of highly qualified, experienced, and
            passionate professionals who strive to provide customers with
            unparalleled Services and Products.
            <h1 className="text-2xl font-bold text-[#8338ec] mt-4 ">
              OUR VISION
            </h1>
            <p className="text-xl font-normal  text-slate-600">
              Enable enterprises leverage technology for business growth and
              success.
            </p>
          </p>
        </div>
        <div className="w-1/2 p-2">
          <h1 className="text-2xl font-bold text-[#8338ec] ">OUR VISION</h1>
          <p className="text-xl font-normal text-slate-600">
            Enable enterprises leverage technology for business growth and
            success.
          </p>
          <h1 className="text-2xl font-bold text-[#8338ec] mt-4">
            OUR MISSION
          </h1>
          <p className="text-xl font-normal  text-slate-600">
            Let OUR Solutions Work For YOU.
          </p>
          <p className="text-xl font-normal tracking-wide  text-slate-600">
            The AOS team is constantly working to upgrade existing solutions and
            develop new products. AOS is transparent and accountable to
            customers, stakeholders and strives to deliver on commitments and
            results.
          </p>
        </div>
        {/* <div>
          <h1 className="text-2xl font-normal">OUR VISION</h1>
          <p className="text-xl font-normal">
            Enable enterprises leverage technology for business growth and
            success
          </p>
        </div> */}
      </Box>
    </Flex>
  )
}

export default OurStory
