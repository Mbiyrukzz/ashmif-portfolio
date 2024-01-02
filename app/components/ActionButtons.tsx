import { Button } from '@radix-ui/themes'
import React from 'react'

const ActionButtons = () => {
  return (
    <div className="flex space-x-3 items-center justify-center p-5">
      <div>
        <Button>Request Demo</Button>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default ActionButtons
