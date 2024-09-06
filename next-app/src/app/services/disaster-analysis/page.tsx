'use client';
import React, { useState } from 'react';
import LeftBox from '../../../components/LeftBox';
import Chatbot from '../../../components/Chatbot';
import AnalysisBox from '../../../components/AnalysisBox';

const DisasterAnalysis = () => {
  const [predicated, setPredicated] = useState("");
  const [state, setstate] = useState(0);
  const [activeDisaster, setActiveDisaster] = useState('earthquake');

  // Resetting predicated and state when changing tabs
  const resetAnalysis = () => {
    setPredicated("");
    setstate(0);
  };

  const handleEarthquake = () => {
    setActiveDisaster('earthquake');
    resetAnalysis();
  };

  const handleFlood = () => {
    setActiveDisaster('flood');
    resetAnalysis();
  };

  const handleCyclone = () => {
    setActiveDisaster('cyclone');
    resetAnalysis();
  };

  return (
    <div className="bg-background-theme w-full h-screen overflow-hidden p-10 pt-24 items-center justify-around">
      <div className='w-full flex items-center justify-between gap-4 mb-6'>
        <button 
          className={`border-2 border-blue-theme w-1/3 rounded-md py-2 text-white font-bold transition duration-200 ease-in-out hover:bg-gray-700 ${activeDisaster === 'earthquake' ? 'bg-gray-700' : ''}`} 
          onClick={handleEarthquake}
        >
          Earthquake
        </button>
        <button 
          className={`border-2 border-blue-theme w-1/3 rounded-md py-2 text-white font-bold transition duration-200 ease-in-out hover:bg-gray-700 ${activeDisaster === 'flood' ? 'bg-gray-700' : ''}`} 
          onClick={handleFlood}
        >
          Flood
        </button>
        <button 
          className={`border-2 border-blue-theme w-1/3 rounded-md py-2 text-white font-bold transition duration-200 ease-in-out hover:bg-gray-700 ${activeDisaster === 'cyclone' ? 'bg-gray-700' : ''}`} 
          onClick={handleCyclone}
        >
          Cyclone
        </button>
      </div>
      <div className='flex flex-col lg:flex-row gap-10'>
        <LeftBox 
          setPredicated={setPredicated} 
          setstate={setstate} 
          activeDisaster={activeDisaster}
        />
        <AnalysisBox predicated={predicated} state={state} />
      </div>
    </div>
  );
}

export default DisasterAnalysis;