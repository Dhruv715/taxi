import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex w-screen  lg:flex-row md:flex-row justify-around items-center py-9 bg-black text-white sm:flex-col md:flex-col '>
                <div className='flex flex-row justify-around items-center  text-2xl' style={{fontFamily: "Tac One"}}>
                    <i class="ri-taxi-line text-3xl pe-2" style={{ color: '#fbbf24' }}></i>MyTaxi.com
                </div>
                <ul className='flex lg:w-4/12 flex-row sm:w-screen md:w-screen font-sans  text-gray-400 text-md font-bold justify-center md:py-2 sm:py-2 '>
                    <li className='md:px-2 sm:px-2'>Home</li>
                    <li className='md:px-2 sm:px-2'>About</li>
                    <li className='md:px-2 sm:px-2'>Services</li>
                    <li className='md:px-2 sm:px-2'>Book a Ride</li>
                </ul>
                <div className='sm:hidden md:hidden lg:block'>
                    <i class="ri-phone-line text-2xl mx-2" style={{ color: '#fbbf24' }}></i>
                    <i class="ri-user-fill text-2xl" style={{ color: '#fbbf24' }}></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
