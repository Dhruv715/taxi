import React from 'react';

function Section2() {
  return (
    <div className='flex flex-col lg:flex-row w-screen  overflow-hidden'>
      <div className='lg:w-1/2 md:w-full sm:w-full'>
        <img className='mx-5 my-3 w-4/5 sm:w-2/3 md:w-2/3' style={{ borderRadius: '20px' }} src="http://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/book-1-1.jpg" alt="" />
        <h2 className='lg:text-lg sm:text-base md:text-base font-bold text-gray-400 ps-5' style={{ fontFamily: 'poppins' }}>Your Premier Choice for Renting a Cab in Surat</h2>
        <h1 className='lg:text-7xl  text-5xl md:text-6xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'poppins' }}>Style Taxi Rent a Cab</h1>
        <p className='ps-5 py-5 md:py-10 leading-8 font-medium pe-5 text-left text-gray-400' style={{ fontFamily: 'poppins' }}>Prepare to be captivated by the unmatched luxury transportation services offered by Style Taxi Rent a Cab. We are the premier choice for reliable and opulent transportation in Surat, Ahmedabad, Mumbai, Vapi, Valsad, Pune, Nashik, Saputara, Gujarat, and Abu Road. With a commitment to meeting the diverse needs of our esteemed customers, Style Taxi has garnered a reputation for excellence, professionalism, and unparalleled customer satisfaction. Embark on a luxurious journey with Style Taxi Rent a Cab.</p>
      </div>
      <div className='lg:w-1/2 md:w-full sm:w-full bg-black py-5 md:py-10 px-2 '>
        <h2 className='text-lg font-bold text-gray-400 ps-5' style={{ fontFamily: 'poppins' }}>Looking for taxi?</h2>
        <h1 className='text-5xl lg:text-7xl sm:text-5xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'poppins', color: 'white' }}>Make your booking</h1>

        <div className='tripform w-full sm:w-2/3 md:w-2/3 ms-1 my-5'>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" className='w-full sm:w-1/2 m-2' placeholder='Your name' />
            <input type="email" className='w-full sm:w-1/2 m-2' placeholder='Email Address' />
          </div>
          <div className='flex w-full sm:w-2/2 my-2'>
            <input type="tel" name="" id="" className='w-full m-2' placeholder='Phone Number' />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Passengers' className='w-full m-2' />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Pickup address' className='w-full m-2' />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Drop off address' className='w-full m-2' />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Message' className='w-full m-2' />
          </div>
          <div className='flex w-full sm:w-2/2 my-2'>
            <button className='w-full m-2'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
