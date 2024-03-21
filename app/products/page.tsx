import React from 'react'
import HireUs from '../components/HireUs'
import SmartRealtors from './SmartRealtors'
import SmartFreight from './SmartFreight'
import Virtuo from './Virtuo'

const ProductsDetailsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <SmartRealtors />
        <SmartFreight />
        <Virtuo />
      </div>
      <HireUs />
    </div>
  )
}

export default ProductsDetailsPage
