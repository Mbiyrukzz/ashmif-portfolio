import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const ProductsLoading = () => {
  return (
    <div>
      <Skeleton count={10} />
    </div>
  )
}

export default ProductsLoading
