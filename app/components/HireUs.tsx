import React from 'react'
import Link from 'next/link'

const HireUs = () => {
  return (
    <div className="bg-[#6c63ff] px-10 py-5 mt-8 flex justify-between text-white rounded-md items-center">
      <div className="w-1/3">
        <p className="text-medium font-bold items-center justify-start space-y-3 tracking-wider">
          AOS is commitited to achieving customer satisfaction by meeting or
          exceeding clients requirements through continual improvement of
          services and products offered.
        </p>
      </div>
      <div className="justify-start tracking-wider space-y-2 w-1/3">
        <p>
          Constantly and consistently delivering best services and products.
        </p>
        <p>
          Keep pace with change and continuosly strive for innovation while
          keeping in step with modern technology and methodology.
        </p>
      </div>
      <div className="">
        <p className="text-2xl font-bold border-2 border-white rounded-lg p-2 hover:bg-white hover:text-[#6c63ff]">
          <Link href="/contact">Hire Us</Link>
        </p>
      </div>
    </div>
  )
}

export default HireUs
