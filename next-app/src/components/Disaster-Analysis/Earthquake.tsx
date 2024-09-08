'use client';
import React, { useState } from 'react'
import axios from 'axios'

function Earthquake({ setPredicated, setstate }: { setPredicated: any, setstate: any }) {
    const [earthquakeData, setEarthquakeData] = useState({ latitude: 0, longitude: 0 })
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await axios.post("http://127.0.0.1:5001/earth", earthquakeData);
        console.log(res.data);
        const { predicted_magnitude } = res.data;
        setPredicated(predicted_magnitude);
        setstate(1);
    }
    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
            <div className='text-white uppercase font-extrabold tracking-wider'>
                Enter the details
            </div>
            <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
            <form className='flex flex-col w-full gap-8'>
                <div className='w-full flex flex-col gap-2 font-bold text-white'>
                    <label>Latitude</label>
                    <input
                        name='latitude'
                        placeholder='Enter Latitude'
                        id='latitude'
                        onChange={(e) => setEarthquakeData({ ...earthquakeData, latitude: Number(e.target.value) })}
                        className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                    />
                </div>
                <div className='w-full flex flex-col gap-2 font-bold text-white'>
                    <label>Longitude</label>
                    <input
                        name='longitude'
                        placeholder='Enter Longitude'
                        id='longitude'
                        onChange={(e) => setEarthquakeData({ ...earthquakeData, longitude: Number(e.target.value) })}
                        className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                    />
                </div>
                <button className='text-white py-2 flex items-center justify-center font-semibold rounded-md transition duration-200 ease-in-out hover:bg-gray-700 border-2 border-blue-theme w-full' onClick={handleClick}>
                    Show data
                </button>
            </form>
        </div>
    )
}

export default Earthquake