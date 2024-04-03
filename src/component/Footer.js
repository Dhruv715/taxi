import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black py-28 px-28 flex justify-between text-white" style={{fontFamily:'poppins'}}>
        <div className="boxsss w-2/5 pe-20">
          <h1 className="pb-3 font-bold text-3xl text-yellow-300">MyTaxi.com</h1>
          <h1 className="pb-3 font-bold text-xl" >About Us</h1>
          <p className="font-bold text-medium  text-gray-400" >
            Welcome to Style Taxi, your one-stop solution for all your cab
            rental needs in multiple cities across Gujarat, Maharashtra and
            Rajasthan.
          </p>
        </div>
        <div className="w-1/5">
          <h1 className="pb-10 font-bold text-xl" >Style taxi Services</h1>
          <ol>
            <li className="text-gray-400 font-bold pb-3">Routes</li>
            <li className="text-gray-400 font-bold pb-3">Oneway cab</li>
            <li className="text-gray-400 font-bold pb-3">Round Trip</li>
          </ol>
        </div>
        <div className="w-1/5">
          <h1 className="pb-10 font-bold text-xl" >Support</h1>
          <ol>
            <li className="text-gray-400 font-bold pb-3">About</li>
            <li className="text-gray-400 font-bold pb-3">Contact Us</li>
            <li className="text-gray-400 font-bold pb-3">Privacy Policy</li>
            <li className="text-gray-400 font-bold pb-3">Terms & Conditions</li>
          </ol>
        </div>
        <div className="w-1/5">
          <h1 className="pb-10 font-bold text-xl" >Contact</h1>
          <ol>
            <li className=" font-bold pb-3"><i class="ri-mail-fill text-yellow-300"></i> &nbsp;MyTaxi76@gmail.com</li>
            <li className=" font-bold pb-3"><i class="ri-phone-line text-yellow-300"></i> &nbsp;+91 9908977656</li>
            
          </ol>
        </div>
      </div>
    </>
  );
}

export default Footer;
