'use client'
import React from 'react'
import Earthquake from './Earthquake';
import Flood from './Flood';
import Cyclone from './Cyclone';

function LeftBox({ setPredicated, setstate, activeDisaster }) {
    return (
        <div 
            className='w-1/3 flex flex-col items-center justify-between bg-modal-theme p-10 rounded-md border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-lg'
            style={{ flexShrink: 0, height: '400px', maxHeight: '400px' }}
        >
            {activeDisaster === 'earthquake' && <Earthquake setPredicated={setPredicated} setstate={setstate} />}
            {activeDisaster === 'flood' && <Flood setPredicated={setPredicated} setstate={setstate} />}
            {activeDisaster === 'cyclone' && <Cyclone setPredicated={setPredicated} setstate={setstate} />}
        </div>
    )
}

export default LeftBox