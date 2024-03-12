import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CareerLoading = () => {
  return (
    <div>
      <Skeleton count={20} />
    </div>
  )
}

export default CareerLoading
