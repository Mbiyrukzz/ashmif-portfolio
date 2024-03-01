import { Button } from '@radix-ui/themes'
import React from 'react'
import Link from 'next/link'

const ActionButtons = () => {
  return (
    <div className="flex space-x-3 items-center justify-center p-5">
      <div>
        <Button>
          <Link href="/contact">Request Demo</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}

export default ActionButtons
