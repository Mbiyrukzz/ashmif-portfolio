import { Box, Flex, Heading } from '@radix-ui/themes'
import React from 'react'

const WeOfferBestServices = () => {
  return (
    <div className="justify-center pt-3">
      <div>
        <Heading className="items-center rounded-lg text-center p-3 bg-[#8338ec] text-white">
          We Provide the Best Services
        </Heading>
      </div>
      <div className="flex p-3 justify-evenly">
        <Flex gap="3">
          <Box width="9" height="9">
            Box
          </Box>
          <Box width="9" height="9">
            Box 2
          </Box>
          <Box width="9" height="9">
            Box 3
          </Box>
          <Box width="9" height="9">
            Box 4
          </Box>
        </Flex>
      </div>
    </div>
  )
}

export default WeOfferBestServices
