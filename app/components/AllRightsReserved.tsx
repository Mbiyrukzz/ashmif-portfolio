'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const AllRightsReserved = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear())
  }, [])
  return (
    <div className="items-center justify-center border-t p-4 text-center flex">
      <p className="space-x-2 text-slate-500 font-light">{year}</p>
      <p className="text-slate-500 font-light ml-2">AOS Allrights Reserved</p>
    </div>
  )
}

export default AllRightsReserved
