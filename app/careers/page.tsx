import Image from 'next/image'
import React from 'react'

const CareePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className=""
        src="/career.png"
        alt="career"
        height="240"
        width="480"
      ></Image>
      <p className="font-normals text-slate-600">
        No Careers Available at the Moment
      </p>
    </div>
  )
}

export default CareePage
