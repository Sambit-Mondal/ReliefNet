import React from 'react'

const Rebuild = () => {
    return (
        <div className='w-1/3 flex flex-col items-center justify-between bg-modal-theme p-10 rounded-md border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-md transition duration-200 ease-in-out hover:shadow-lg hover:shadow-blue-theme'>
            <div className='text-white uppercase font-extrabold tracking-wider'>
                REBUILD
            </div>
            <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
            <div className='text-white'>
            The platform integrates damage assessment tools driven by AI and offers blockchain-enabled transparency, which aids in recovery by streamlining insurance claims, and supporting the affected individuals, ensuring they can rebuild stronger.
            </div>
        </div>
    )
}

export default Rebuild