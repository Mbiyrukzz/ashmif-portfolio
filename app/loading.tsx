import { Grid, Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingMainPage = () => {
  return (
    <Grid columns="2" gap="5" className="justify-between p-10">
      <Box>
        <div className="text-start flex-row space-y-10">
          <h1 className="pt-5 m-auto font-normal text-start text-6xl">
            <p className="text-[#6c63ff] font-semibold">
              <Skeleton count={3} />
            </p>
          </h1>
        </div>
        <div>
          <p className="text-2xl text-start pt-3 text-slate-600">
            <Skeleton count={3} />
          </p>
        </div>
        <div>
          <p className="text-2xl pt-4 text-slate-800">
            <Skeleton count={3} />
          </p>
        </div>
      </Box>
      <Box>
        <div>
          <Skeleton count={18} />
        </div>
      </Box>
      <Box>
        {' '}
        <h1 className="text-center font-bold text-gray-900 text-4xl mt-10 ">
          <Skeleton className="justify-center" count={3} />
        </h1>
      </Box>
    </Grid>
  )
}

export default LoadingMainPage
