
import React from 'react'

const Rightbar = () => {
  return (
    
        <div className='gap-5 ml-2 flex flex-col  sticky top-4 ' >
          {/* Right Block 1 */}
          <div className='w-[360px] h-[290px] bg-gray-200 p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>Right Block 1</h1>
            <p>This is the right block content.</p>
          </div>

          {/* Right Block 2 */}
          <div className='w-[360px] h-[290px] bg-gray-200 p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>Right Block 2</h1>
            <p>This is the right block content.</p>
          </div>
        </div>
    
  )
}
export default Rightbar;