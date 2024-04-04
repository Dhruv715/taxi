import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black py-10 lg:px-28 sm:px-10 flex flex-col ps-8 lg:flex-row justify-between text-white" style={{ fontFamily: 'poppins' }}>
        <div className="boxsss lg:w-2/5 md:w-full sm:w-full lg:pe-20 mb-10 lg:mb-0">
          <h1 className="pb-3 font-bold text-3xl text-yellow-300 cursor-pointer">MyTaxi.com</h1>
          <h1 className="pb-3 font-bold text-xl">About Us</h1>
          <p className="font-bold text-medium text-gray-400">
            Welcome to Style Taxi, your one-stop solution for all your cab
            rental needs in multiple cities across Gujarat, Maharashtra, and
            Rajasthan.
          </p>
        </div>
        <div className="lg:w-1/5 md:w-2/5 sm:w-full">
          <h1 className="pb-6 lg:pb-10 font-bold text-xl cursor-pointer">Style taxi Services</h1>
          <ol>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Routes</li>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Oneway cab</li>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Round Trip</li>
          </ol>
        </div>
        <div className="lg:w-1/5 md:w-2/5 sm:w-full">
          <h1 className="pb-6 lg:pb-10 font-bold text-xl cursor-pointer">Support</h1>
          <ol>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">About</li>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Contact Us</li>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Privacy Policy</li>
            <li className="text-gray-400 font-bold pb-3 cursor-pointer">Terms & Conditions</li>
          </ol>
        </div>
        <div className="lg:w-1/5 md:w-2/5 sm:w-full">
          <h1 className="pb-6 lg:pb-10 font-bold text-xl cursor-pointer">Contact</h1>
          <ol>
            <li className="font-bold pb-3 cursor-pointer"><i class="ri-mail-fill text-yellow-300"></i> &nbsp;MyTaxi76@gmail.com</li>
            <li className="font-bold pb-3 cursor-pointer"><i class="ri-phone-line text-yellow-300"></i> &nbsp;+91 9908977656</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Footer;
