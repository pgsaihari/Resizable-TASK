import React from 'react'
import ResizableLayout from '../components/ResizableLayout'

const ResizePage = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm col-m-2 col-xl-3'>
                <ResizableLayout/>
            </div>
        </div>
    </div>
  )
}

export default ResizePage