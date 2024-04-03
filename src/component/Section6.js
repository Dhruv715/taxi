import React from 'react';

function Section6() {
  return (
    <>
      
        <div className='flex lg:flex-row sm:flex-col md:flex-col bg-yellow-400 w-screen py-28 px-10'>
            <div className='lg:w-2/3 sm:w-3/3 md:3/3 ps-20'>
                <p className='text-lg font-semibold'>Make a call or fill form</p>
                <h1 className='text-5xl font-extrabold' style={{fontFamily:'poppins'}}>Call our agent to get a quote.</h1>
            </div>
            <div className="lg:w-1/3 sm:w-3/3 md:3/3 sm:ms-20 sm:my-10 md:ms-20 md:my-10">
                <button className='bg-black text-white py-5 px-10 rounded-full text-lg font-semibold'>Book Taxi Now</button>
            </div>
        </div>
    </>
  );
}

export default Section6;
