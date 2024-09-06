'use client';
import axios from 'axios';
import React, { useState } from 'react'

function Flood({ setPredicated, setstate }) {
    const [floodData, setfloodData] = useState({ month: "jan", value: 0 })
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const handleMonthChange = (event) => {
        setfloodData({ ...floodData, month: event.target.value });
    };
    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://127.0.0.1:5001/flood", floodData);
        console.log(res.data);
        const { predicted_FLOOD } = res.data;
        setPredicated(predicted_FLOOD);
        setstate(2);
    }
    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
            <div className='text-white uppercase font-extrabold tracking-wider'>
                Enter the details
            </div>
            <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
            <form className='w-full h-full flex flex-col items-center justify-between'>
                <div className='w-full flex flex-col items-center justify-center gap-7'>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Select the Month</label>
                        <select value={floodData.month} onChange={handleMonthChange} className='p-2 px-4 w-full rounded-sm text-white bg-background-theme border-[1px] border-blue-theme'>
                            {months.map((month) => (
                                <option key={month} value={month.toLowerCase()}>{month}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Enter the rain (in mm)</label>
                        <input
                            name='value'
                            placeholder='Enter the Value'
                            id='value'
                            onChange={(e) => setfloodData({ ...floodData, value: Number(e.target.value) })}
                            className='w-full bg-modal-theme text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-2 text-sm'
                        />
                    </div>
                </div>
                <button className='text-white py-2 flex items-center justify-center font-semibold rounded-md transition duration-200 ease-in-out hover:bg-gray-700 border-2 border-blue-theme w-full' onClick={handleClick}>
                    Show data
                </button>
            </form>
        </div>
    )
}

export default Flood