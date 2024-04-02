import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex w-full  flex-row justify-around items-center py-9 bg-black text-white'>
                <div className='flex flex-row justify-around items-center  text-2xl' style={{fontFamily: "Tac One"}}>
                    <i class="ri-taxi-line text-3xl pe-2" style={{ color: '#fbbf24' }}></i>MyTaxi.com
                </div>
                <ul className='flex w-4/12 flex-row font-sans  text-gray-400 text-md font-bold justify-evenly'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Book a Ride</li>
                </ul>
                <div>
                    <i class="ri-phone-line text-2xl mx-2" style={{ color: '#fbbf24' }}></i>
                    <i class="ri-user-fill text-2xl" style={{ color: '#fbbf24' }}></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
