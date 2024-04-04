import React from 'react';

function Section6() {
  return (
    <>
      <div className='flex flex-col item-center lg:flex-row bg-yellow-400 w-screen py-28 px-10'>
        <div className='lg:w-2/3 sm:w-full md:w-full lg:ps-20 sm:ps-0 md:ps-0 mt-4'>
          <p className='text-lg font-semibold text-left lg:text-left'>Make a call or fill form</p>
          <h1 className='text-5xl font-extrabold text-left lg:text-left' style={{fontFamily:'poppins'}}>Call our agent to get a quote.</h1>
        </div>
        <div className="lg:w-1/5 w-4/5 sm:w-full md:w-full lg:ms-20 mt-4 sm:ms-0 md:ms-0 sm:mt-10 md:mt-10 lg:mt-0 lg:my-auto">
          <button className='bg-black text-white py-5 px-10 rounded-full text-lg font-semibold w-full'>Book Taxi Now</button>
        </div>
      </div>
    </>
  );
}

export default Section6;
