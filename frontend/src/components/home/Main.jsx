import React from "react";
import landingImage from '../../data/images/others/landingPage.jpg'

const Main = () => {
  return (
    <div className="min-h-screen flex lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col p-4 bg-white">
        <div className="max-w-2xl mx-auto my-auto lg:mx-0"> {/* Container for content alignment */}
          <h1 className="text-3xl font-bold mb-4 text-left lg:text-4xl">
            Smart Marketing. Strong Branding. Backed by Legal Expertise.
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-left lg:mb-12">
            Marketing that works, branding that lasts, and legal solutions that protect. Achieve your business goals
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 self-start">
            Schedule a free call today!
          </button>
        </div>
      </div>  

      {/* Right Section */}
      <div className="lg:w-1/2 hidden lg:block lg:mr-8" 
             style={{
             backgroundImage: `url(${landingImage})`, // Replace with your image path
             backgroundSize: "80%",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat"
           }}>
      </div>
    </div>
  );
};

export default Main;

