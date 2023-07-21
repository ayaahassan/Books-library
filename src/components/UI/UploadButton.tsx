import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'

const UploadButton = ({loading}:{loading:boolean}) => {
  return (
    <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div className='mt-4' >Upload</div>
</div>
  )
}

export default UploadButton