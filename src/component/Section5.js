import React from 'react';

function Section5() {
  return (
    <>
        <div className='w-screen bg-gray-100 py-10'>
        <h1 className='font-extrabold text-center text-4xl lg:text-6xl lg:text-center sm:text-5xl md:text-5xl lg:px-10 lg:py-4 md:py-3 sm:py-4' style={{fontFamily:'poppins'}}>Why Choose My Taxi</h1>
        <h3 className='font-medium text-center py-3 text-lg px-4 '  style={{fontFamily:'poppins'}}>Here are some reasons why Style Taxi is your best choice for renting a cab:</h3>
        <div className="parentvox flex flex-col lg:flex-row md:flex-col sm:flex-col my-5 justify-center items-center">
            <div className="lg:w-1/2 md:w-2/2  sm:w-full flex justify-center lg:justify-end mb-5 lg:mb-0">
                <img src="https://styletaxi.in/wp-content/uploads/2023/06/taxi-sign-car-600x480.jpg" className='h-64 sm:h-96 md:h-96 lg:96' alt="taxiimages" />
            </div>
            <div className="lg:w-1/2 md:w-full sm:w-full px-2">
                <ol type="1" className='w-5/5 lg:w-5/5 md:w-full sm:w-full px-5 text-justify font-sans font-medium text-base' style={{fontFamily:'poppins'}} >
                    <li className='py-3 text-gray-400'>Extensive Fleet: Our fleet consists of a wide variety of well-maintained and luxurious cars, ensuring that you have the perfect ride for every occasion.</li>
                    <li className='py-3 text-gray-400'>Professional Drivers: Our drivers are experienced, well-trained, and prioritize your safety and comfort. They are knowledgeable about the local routes and strive to provide an excellent customer experience.</li>
                    <li className='py-3 text-gray-400'>Affordable Rates: We offer competitive pricing without compromising on the quality of service. Our transparent pricing policy ensures that you get value for your money.</li>
                    <li className='py-3 text-gray-400'>24/7 Availability: We understand that travel needs can arise at any time. That's why our services are available round the clock, ensuring that you can book a cab whenever you need one.</li>
                    <li className='py-3 text-gray-400'>Easy Booking Process: With our user-friendly online platform and mobile app, booking a cab is quick and hassle-free. Just a few clicks, and your ride will be confirmed.</li>
                </ol>
            </div>
        </div>
        </div>
    </>
  );
}

export default Section5;
