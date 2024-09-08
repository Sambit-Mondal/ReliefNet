import React from 'react'

const Prepare = () => {
  return (
    <div className='w-1/3 flex flex-col items-center justify-between bg-modal-theme p-10 rounded-md border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-md transition duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-theme'>
      <div className='text-white uppercase font-extrabold tracking-wider'>
        PREPARE
      </div>
      <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
      <div className='text-white'>
        Through predictive analytics, early warning systems, and risk mapping, it leverages ML models to predict natural events like floods or cyclones and provides real-time alerts, helping users make informed decisions to safeguard lives and property.
      </div>
    </div>
  )
}

export default Prepare