'use client';
import axios from 'axios';
import React, { useState } from 'react';

function Cyclone({ setPredicated, setstate }) {
    const [hurriData, sethurriData] = useState({
        latitude: 0,
        longitude: 0,
        moderate_wind_ne: 0,
        moderate_wind_se: 0,
        moderate_wind_sw: 0,
        moderate_wind_nw: 0,
        year: 0,
        month: 0,
        day: 0,
    });

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:5001/hurri', hurriData);
        console.log(hurriData);
        console.log(res.data);
        const { predicted_max_wind } = res.data;
        setPredicated(predicted_max_wind);
        setstate(3);
    };

    return (
        <div className='flex flex-col w-full h-full items-center justify-between'>
            <div className='text-white uppercase font-extrabold tracking-wider'>
                Enter the details
            </div>
            <hr className='border-0 w-full h-[1px] mt-3 mb-5 bg-blue-theme' />
            <form className='flex flex-col w-full gap-8 overflow-hidden overflow-y-auto max-h-[25rem] px-2 pb-4'>
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Latitude</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='latitude'
                            type='number'
                            placeholder='Latitude'
                            onChange={(e) => sethurriData({ ...hurriData, latitude: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Longitude</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='longitude'
                            type='number'
                            placeholder='Longitude'
                            onChange={(e) => sethurriData({ ...hurriData, longitude: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Moderate Wind (North-East)</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='moderate_wind_ne'
                            type='number'
                            placeholder='Enter the Value'
                            onChange={(e) => sethurriData({ ...hurriData, moderate_wind_ne: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Moderate Wind (South-East)</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='moderate_wind_se'
                            type='number'
                            placeholder='Enter the Value'
                            onChange={(e) => sethurriData({ ...hurriData, moderate_wind_se: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Moderate Wind (South-West)</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='moderate_wind_sw'
                            type='number'
                            placeholder='Enter the Value'
                            onChange={(e) => sethurriData({ ...hurriData, moderate_wind_sw: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Moderate Wind (North-West)</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='moderate_wind_nw'
                            type='number'
                            placeholder='Enter the Value'
                            onChange={(e) => sethurriData({ ...hurriData, moderate_wind_nw: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Year</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='year'
                            type='number'
                            placeholder='Enter the Year'
                            onChange={(e) => sethurriData({ ...hurriData, year: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Month</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='month'
                            type='number'
                            placeholder='Enter the Month (1-12)'
                            onChange={(e) => sethurriData({ ...hurriData, month: Number(e.target.value) })}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Day</label>
                        <input
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                            id='day'
                            type='number'
                            placeholder='Enter the Day'
                            onChange={(e) => sethurriData({ ...hurriData, day: Number(e.target.value) })}
                        />
                    </div>
                </div>
            </form>
            <button
                className='text-white py-2 flex items-center mt-5 justify-center font-semibold rounded-md transition duration-200 ease-in-out hover:bg-gray-700 border-2 border-blue-theme w-full'
                onClick={handleClick}
            >
                Show data
            </button>
        </div>
    );
}

export default Cyclone;