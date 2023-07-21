import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-[4px]	">
    <Spin />
  </div>
  )
}

export default Loader