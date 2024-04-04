import React from 'react';

function Secction4() {
  return (
    <>
        <div className='mainsection py-10 bg-white text-center'>
                <h1 className='font-extrabold text-4xl px-4 lg:text-7xl md:text-6xl mt-3 mb-10' style={{fontFamily:'poppins'}}>Our Awesome Fleet</h1>
                <div className='parentbosx flex flex-wrap justify-center' >
                    <div className="boxs">
                        <img src="https://imgd-ct.aeplcdn.com/664x415/n/odg8asa_1459238.jpg?q=80" alt="" />
                        <h1 className='text-xl font-bold py-2' style={{fontFamily:'poppins'}}>HatchBack</h1>
                        <h3 style={{fontFamily:'poppins'}}>$ 10.00 Price Starts from</h3>
                    </div>
                    <div className="boxs">
                        <img src="https://www.formulacarrental.com/images/hondacity.jpg" alt="" />
                        <h1 className='text-xl font-bold py-2' style={{fontFamily:'poppins'}}>Sedan</h1>
                        <h3 style={{fontFamily:'poppins'}}>$ 20.00 Price Starts from</h3>
                    </div>
                    <div className="boxs">
                        <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=80" alt="" />
                        <h1 className='text-xl font-bold py-2' style={{fontFamily:'poppins'}}>Innova Crysta</h1>
                        <h3 style={{fontFamily:'poppins'}}>$ 35.00 Price Starts from</h3>
                    </div>
                    <div className="boxs">
                        <img src="https://www.forcemotors.com/assets/PRICING-IMAGES/URBANIA/URBANIA.png" alt="" />
                        <h1 className='text-xl font-bold py-2' style={{fontFamily:'poppins'}}>Tempo Traveller</h1>
                        <h3 style={{fontFamily:'poppins'}}>$ 50.00 Price Starts from</h3>
                    </div>
                </div>
        </div>   
    </>
  );
}

export default Secction4;
