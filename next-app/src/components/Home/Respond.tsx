import React from 'react'

const Respond = () => {
    return (
        <div className='w-1/3 flex flex-col items-center justify-between bg-modal-theme p-10 rounded-md border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-md transition duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-theme'>
            <div className='text-white uppercase font-extrabold tracking-wider'>
                RESPOND
            </div>
            <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
            <div className='text-white'>
                AI-powered resource allocation ensures efficient distribution of relief supplies. By optimizing rescue operations and prioritizing critical areas, the platform facilitates timely, coordinated responses that reduce the impact of disasters.
            </div>
        </div>
    )
}

export default Respond