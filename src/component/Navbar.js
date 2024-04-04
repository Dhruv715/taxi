import React from 'react';

function Navbar() {
    return (
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around items-center py-9 bg-black text-white overflow-hidden'>
            <div className='text-4xl flex flex-row justify-around items-center cursor-pointer' style={{ fontFamily: "Tac One" }}>
                <i className="ri-taxi-line text-3xl pe-2" style={{ color: '#fbbf24' }}></i>
                MyTaxi.com
            </div>
            <ul className=' space-x-2 flex w-full lg:w-4/12 flex-row sm:flex-row md:flex-row lg:flex-row font-sans text-medium font-bold justify-center md:py-2 sm:py-2 ' style={{fontFamily:'poppins'}}>
                <li className='md:px-2 sm:px-2 cursor-pointer hover:text-yellow-400 text-gray-300' >Home</li>
                <li className='md:px-2 sm:px-2 cursor-pointer hover:text-yellow-400 text-gray-300'>About</li>
                <li className='md:px-2 sm:px-2 cursor-pointer hover:text-yellow-400 text-gray-300'>Services</li>
                <li className='md:px-2 sm:px-2 cursor-pointer hover:text-yellow-400 text-gray-300'>Book Ride</li>
            </ul>
            <div className='hidden sm:hidden md:hidden lg:block'>
                <i className="ri-phone-line text-2xl mx-2" style={{ color: '#fbbf24' }}></i>
                <i className="ri-user-fill text-2xl" style={{ color: '#fbbf24' }}></i>
            </div>
        </div>
    );
}

export default Navbar;
