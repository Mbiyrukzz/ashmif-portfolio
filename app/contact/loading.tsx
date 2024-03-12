import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingContactUs = () => {
  return (
    <div>
      <div>
        <Skeleton count={5} height={20} />
      </div>
    </div>
  )
}

export default LoadingContactUs
