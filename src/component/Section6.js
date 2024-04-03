import React from 'react';

function Section6() {
  return (
    <>
      
        <div className='flex bg-yellow-400 py-28 px-10'>
            <div className='w-2/3 ps-20'>
                <p className='text-lg font-semibold'>Make a call or fill form</p>
                <h1 className='text-5xl font-extrabold' style={{fontFamily:'poppins'}}>Call our agent to get a quote.</h1>
            </div>
            <div className="w-1/3">
                <button className='bg-black text-white py-5 px-10 rounded-full text-lg font-semibold'>Book Taxi Now</button>
            </div>
        </div>
    </>
  );
}

export default Section6;
