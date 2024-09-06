import React from 'react';

function AnalysisBox({ predicated, state }) {
  return (
    <div className='w-2/3 rounded-md px-5 py-2 flex items-center justify-center text-white bg-modal-theme border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-lg max-h-[24.7rem]'>
      {predicated ? (
        state === 1 ? (
          // Earthquake Prediction
          <div className='w-full h-full rounded-sm p-4 tracking-wide font-normal text-sm overflow-hidden'>
            <h1 className='text-2xl w-full text-center font-bold uppercase tracking-wider sticky top-0 bg-modal-theme z-10'>
              Earthquake Prediction
            </h1>
            <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
            <div className='overflow-y-auto max-h-[21rem] pb-12'>
              <p>The provided location has experienced an earthquake with a magnitude of <span className='text-blue-theme font-bold'>{predicated}</span>.</p>
              <p>This information is based on the latest seismic data and predictions from reliable sources. Understanding the potential magnitude of an earthquake can help in assessing the potential impact and necessary precautions.</p>
              <br />
              <h1 className='text-xl font-bold mt-1'>Precautionary Measures:</h1>
              <hr className='border-0 h-[1px] bg-blue-theme mt-2 mb-5' />
              <p>In the event of an earthquake, it is important to take the following precautions to ensure your safety:</p>
              <ul className='list-disc list-inside'>
                <li>Secure heavy furniture and appliances to walls to prevent them from toppling.</li>
                <li>Identify safe spots in each room, such as under sturdy furniture or against interior walls.</li>
                <li>Have an emergency kit ready, including water, non-perishable food, flashlights, and a first-aid kit.</li>
                <li>Ensure that you and your family know the evacuation routes and safe spots both inside and outside your home.</li>
                <li>Stay informed about earthquake updates and warnings from local authorities and seismic monitoring agencies.</li>
              </ul>
              <p>By being prepared and informed, you can reduce the risk and impact of earthquakes on your life and property.</p>
            </div>
          </div>
        ) : state === 2 ? (
          // Flood Prediction
          <div className='w-full h-full rounded-sm p-4 tracking-wide font-normal text-sm overflow-hidden'>
            <h1 className='text-2xl w-full text-center font-bold uppercase tracking-wider sticky top-0 bg-modal-theme z-10'>
              Flood Prediction
            </h1>
            <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
            <div className='overflow-y-auto max-h-[21rem] pb-12'>
              <p>The provided location is predicted to experience flooding with a potential depth of <span className='text-blue-theme font-bold'>{predicated}</span>.</p>
              <p>This information is based on the latest flood data and predictions from reliable sources. Understanding the potential depth of a flood can help in assessing the potential impact and necessary precautions.</p>
              <br />
              <h1 className='text-xl font-bold mt-1'>Precautionary Measures:</h1>
              <hr className='border-0 h-[1px] bg-blue-theme mt-2 mb-5' />
              <p>In the event of a flood, it is important to take the following precautions to ensure your safety:</p>
              <ul className='list-disc list-inside'>
                <li>Move to higher ground immediately and avoid walking or driving through floodwaters.</li>
                <li>Disconnect electrical appliances and turn off utilities to prevent electrical hazards.</li>
                <li>Prepare an emergency kit with essentials like water, non-perishable food, flashlights, and a first-aid kit.</li>
                <li>Stay informed with updates from local authorities and weather services.</li>
                <li>Have a plan for evacuation and ensure all family members know it.</li>
              </ul>
              <p>Being aware and prepared can significantly mitigate the impact of floods on your life and property.</p>
            </div>
          </div>
        ) : (
          // Cyclone (Hurricane) Prediction
          <div className='w-full h-full rounded-sm p-4 tracking-wide font-normal text-sm overflow-hidden'>
            <h1 className='text-2xl w-full text-center font-bold uppercase tracking-wider sticky top-0 bg-modal-theme z-10'>
              Cyclone Prediction
            </h1>
            <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
            <div className='overflow-y-auto max-h-[21rem] pb-12'>
              <p>The provided location is expected to experience a cyclone with a predicted wind speed of <span className='text-blue-theme font-bold'>{predicated} mph</span>.</p>
              <p>This information is based on the latest cyclone data and predictions from reliable sources. Understanding the potential severity of a cyclone can help in assessing the potential impact and necessary precautions.</p>
              <br />
              <h1 className='text-xl font-bold mt-1'>Precautionary Measures:</h1>
              <hr className='border-0 h-[1px] bg-blue-theme mt-2 mb-5' />
              <p>In the event of a cyclone, it is important to take the following precautions to ensure your safety:</p>
              <ul className='list-disc list-inside'>
                <li>Secure your home by installing storm shutters or boarding up windows and doors.</li>
                <li>Stock up on emergency supplies including water, food, medications, and a first-aid kit.</li>
                <li>Follow evacuation orders from local authorities and have a clear evacuation plan.</li>
                <li>Keep informed with updates from weather services and local news.</li>
                <li>Ensure you have a battery-powered radio and spare batteries for emergency communication.</li>
              </ul>
              <p>Preparation and awareness are key to minimizing the impact of cyclones on your safety and property.</p>
            </div>
          </div>
        )
      ) : (
        // Default Message
        <div className='w-full h-full rounded-sm p-4 tracking-wide font-normal text-lg overflow-hidden'>
          <h1 className='text-2xl w-full text-center font-bold uppercase tracking-wider sticky top-0 bg-modal-theme z-10'>
            ReliefNet - Prediction Model
          </h1>
          <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
          <div className='overflow-y-auto max-h-[21rem] pb-12'>
            <p>Our model uses advanced machine learning and real-time data to predict natural disasters like earthquakes, floods, and cyclones based on geographic coordinates.</p>
            <br />
            <h1 className='text-xl font-bold mt-5'>Key Features:</h1>
            <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
            <ul className='list-disc list-inside'>
              <li><span className='font-bold'>Real-time Predictions:</span> Get instant predictions for earthquake magnitude, flood depth, and cyclone wind speed.</li>
              <li><span className='font-bold'>Accurate Data:</span> Utilizes data from reliable sources for precise forecasts.</li>
              <li><span className='font-bold'>User-Friendly:</span> Easy-to-understand predictions with practical precautionary measures.</li>
              <li>Stay informed and prepared with our accurate and timely disaster predictions.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalysisBox;