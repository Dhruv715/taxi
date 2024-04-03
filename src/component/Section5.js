import React from 'react';

function Section5() {
  return (
    <>
        <div className='w-screen bg-gray-100 py-10'>
        <h1 className='font-extrabold text-6xl py-5 text-center' style={{fontFamily:'poppins'}}>Why Choose Style Taxi</h1>
        <h3 className='font-medium text-center py-3 text-lg'  style={{fontFamily:'poppins'}}>Here are some reasons why Style Taxi is your best choice for renting a cab:</h3>
        <div className="parentvox flex  lg:flex-row md:flex-col sm:flex-col my-5 justify-center items-center">
            <div className="lg:w-1/2 md:w-2/2 sm:w-2/2 flex  justify-end">
                <img src="https://styletaxi.in/wp-content/uploads/2023/06/taxi-sign-car-600x480.jpg" className='w-1/2' alt="taxiimages"  style={{width:'500px'}}/>
            </div>
            <div className="lg:w-1/2 md:2/2 sm:2/2 px-10">
                <ol type="1" className='lg:w-4/5 md:5/5 sm:5/5 px-5 text-center font-sans font-medium text-base' style={{fontFamily:'poppins'}} >
                    <li className='py-3'>Extensive Fleet: Our fleet consists of a wide variety of well-maintained and luxurious cars, ensuring that you have the perfect ride for every occasion.</li>
                    <li className='py-3'>Professional Drivers: Our drivers are experienced, well-trained, and prioritize your safety and comfort. They are knowledgeable about the local routes and strive to provide an excellent customer experience.</li>
                    <li className='py-3'>Affordable Rates: We offer competitive pricing without compromising on the quality of service. Our transparent pricing policy ensures that you get value for your money.</li>
                    <li className='py-3'>24/7 Availability: We understand that travel needs can arise at any time. That's why our services are available round the clock, ensuring that you can book a cab whenever you need one.</li>
                    <li className='py-3'>Easy Booking Process: With our user-friendly online platform and mobile app, booking a cab is quick and hassle-free. Just a few clicks, and your ride will be confirmed.</li>
                </ol>
            </div>
        </div>
        </div>
    </>
  );
}

export default Section5;
