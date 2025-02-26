import React from "react";
// import landingImage from '../../data/images/others/landingPage.jpg'
import landingImage2 from '../../data/images/others/landingPage2.jpg'

const Main = () => {
  return (
    <div className="min-h-screen flex lg:flex-row" style={{
      backgroundImage: `url(${landingImage2})`, // Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="w-full lg:w-1/2 flex flex-col p-4">
        <div className="max-w-2xl mx-auto my-36 lg:my-auto lg:mx-0" >
          {/* Animated Heading with staggered entries */}
          <h1 className="text-4xl font-bold mb-4 text-left lg:text-4xl text-white">

            <span className="block animate-fade-in-up opacity-0 [animation-delay:200ms] ">
              Smart Marketing.
            </span>
            <span className="block animate-fade-in-up opacity-0 [animation-delay:400ms]">
              Strong Branding.
            </span>
            <span className="block animate-fade-in-up opacity-0 md:text-blue-600 [animation-delay:600ms]">
              Backed by Legal Expertise.
            </span>
          </h1>

          {/* Animated Paragraph */}
          <p className="text-lg text-white mb-8 text-left lg:mb-12 
                opacity-0 animate-slide-in-left [animation-delay:800ms]">
            Marketing that works, branding that lasts, and legal solutions that protect.
            Achieve your business goals
          </p>

          {/* Pulsing Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                     hover:bg-blue-700 transition-all duration-300 
                     self-start animate-pulse-slow md:w-full">
            <a href='https://calendly.com/horizonlegalmedia/30min'
              target="_blank"
              rel="noopener noreferrer">
              Schedule a free call today!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
// import React from "react";
// import landingImage from '../../data/images/others/landingPage.jpg'
// import landingImage2 from '../../data/images/others/landingPage2.jpg'

// const Main = () => {
//   return (
//     <div className="min-h-screen flex lg:flex-row">
//       {/* Left Section */}
//       <div 
//       style={{
//         backgroundImage: `url(${landingImage2})`, // Replace with your image path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"
//       }} className="w-full lg:w-1/2 flex flex-col p-4 md:!bg-none">
//         <div className="max-w-2xl mx-auto my-36 lg:my-auto lg:mx-0" >
//           {/* Animated Heading with staggered entries */}
//           <h1 className="text-4xl font-bold mb-4 text-left lg:text-4xl text-white">

//             <span className="block animate-fade-in-up opacity-0 [animation-delay:200ms] md:text-black">
//               Smart Marketing.
//             </span>
//             <span className="block animate-fade-in-up opacity-0 [animation-delay:400ms] md:text-black">
//               Strong Branding.
//             </span>
//             <span className="block animate-fade-in-up opacity-0 md:text-blue-600 [animation-delay:600ms]">
//               Backed by Legal Expertise.
//             </span>
//           </h1>

//           {/* Animated Paragraph */}
//           <p className="text-lg text-white md:text-gray-700 mb-8 text-left lg:mb-12 
//                 opacity-0 animate-slide-in-left [animation-delay:800ms]">
//             Marketing that works, branding that lasts, and legal solutions that protect.
//             Achieve your business goals
//           </p>

//           {/* Pulsing Button */}
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg 
//                      hover:bg-blue-700 transition-all duration-300 
//                      self-start animate-pulse-slow md:w-full">
//             <a href='https://calendly.com/horizonlegalmedia/30min'
//               target="_blank"
//               rel="noopener noreferrer">
//               Schedule a free call today!
//             </a>
//           </button>
//         </div>
//       </div>


//       {/* Right Section */}
//       <div className="lg:w-1/2 hidden lg:block lg:mr-8"
//         style={{
//           backgroundImage: `url(${landingImage})`, // Replace with your image path
//           backgroundSize: "80%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat"
//         }}>
//       </div>
//     </div>
//   );
// };

// export default Main;


