'use client'

import { Box, Card, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const WeOfferBestServices = () => {
  return (
    <Box className="justify-center pt-2">
      <Box>
        <Heading className="items-center rounded-lg text-center p-3 bg-[#8338ec] text-white">
          We Provide the Best Services
        </Heading>
      </Box>
      <Box>
        <Card size="2" style={{ maxWidth: 400 }} className="mt-2">
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              className="p-1 flex items-center text-center rounded-t-xl"
              src="/smartfreight.png"
              alt="Bold typography"
              width="400"
              height="140"
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Typography</Strong> is the art and technique of arranging
            type to make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
      </Box>
    </Box>
  )
}

export default WeOfferBestServices
