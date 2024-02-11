import { Box, Flex } from '@radix-ui/themes'
import React from 'react'

const OurStory = () => {
  return (
    <Flex gap="1">
      <Box className="mt-4 p-8 flex justify-between">
        <div className="w-1/2">
          <p className="text-xl font-normal">
            Ashmif Office Solutions LTD is an IT Solutions & Software Company
            based in Mombasa providing custom software development, website
            design and development, mobile and desktop apps development and
            graphic designing. With a team of highly qualified, experienced, and
            passionate professionals who strive to provide customers with
            unparalleled Services and Products.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-normal text-[#8338ec] ">OUR VISION</h1>
          <p className="text-xl font-normal">
            Enable enterprises leverage technology for business growth and
            success.
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
