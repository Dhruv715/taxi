import React from 'react'

function Section2() {
    return (
        <>
            <div className='flex lg:flex-row md:flex-col sm:flex-col w-screen my-2 ' >
                <div className='lg:w-1/2 md:w-screen sm:w-screen'>
                    <img className='mx-5 my-3' style={{ borderRadius: '20px' }} src="http://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/book-1-1.jpg" alt="" />
                    <h2 className='lg:text-lg sm:text-base md:text-base font-bold text-gray-400 ps-5' style={{ fontFamily: 'poppins' }} >
                        Your Premier Choice for Renting a Cab in Surat</h2>
                    <h1 className='text-7xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'poppins' }}>Style Taxi Rent a Cab</h1>
                    <p className='ps-5 py-10 leading-8 font-medium pe-5 text-left text-gray-400' style={{ fontFamily: 'poppins' }}>Prepare to be captivated by the unmatched luxury transportation services offered by Style Taxi Rent a Cab. We are the premier choice for reliable and opulent transportation in Surat, Ahmedabad, Mumbai, Vapi, Valsad, Pune, Nashik, Saputara, Gujarat, and Abu Road. With a commitment to meeting the diverse needs of our esteemed customers, Style Taxi has garnered a reputation for excellence, professionalism, and unparalleled customer satisfaction. Embark on a luxurious journey with Style Taxi Rent a Cab.</p>
                </div>
                <div className='lg:w-1/2 md:w-screen sm:w-screen bg-black py-10 px-10'>
                    <h2 className='text-lg font-bold text-gray-400 ps-5' style={{ fontFamily: 'poppins' }} >
                        Looking for taxi?</h2>
                    <h1 className='text-7xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'poppins', color: 'white' }}>Make your booking</h1>

                    <div className='tripform w-2/2 ms-5 my-5'>
                        <div className="flex w-2/2 my-2">
                            <input type="text" className='w-1/2 m-2 ' placeholder='Your name' />
                            <input type="email" className='w-1/2 m-2' placeholder='Email Address' />
                        </div>
                        <div className='flex w-2/2 my-2'>
                            <input type="tel" name="" id="" className='w-screen m-2' placeholder='Phone Number' />
                        </div>
                        <div className="flex w-2/2 my-2">
                            <input type="text" placeholder='Passengers' className='w-screen m-2' />
                        </div>
                        <div className="flex w-2/2 my-2">
                            <input type="text" placeholder='Pickup address' className='w-screen m-2' />
                        </div>
                        <div className="flex w-2/2 my-2" >
                            <input type="text" placeholder='Drop off address' className='w-screen m-2' />

                        </div>
                        <div className="flex w-2/2 my-2">
                            <input type="text" placeholder='Message' className='w-screen m-2' />
                        </div>
                        <div className='flex w-2/2 my-2'>
                            <button className='w-screen m-2'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
