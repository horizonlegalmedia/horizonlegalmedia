import React from 'react';

const Services = () => {
  const legalServices = [
    { id: 1, title: 'Corporate Law & Compliance', description: 'Stay compliant with ever-changing laws and regulations. Our experts will guide you through business formation, corporate governance, and regulatory compliance.' },
    { id: 2, title: 'Intellectual Property Protection', description: 'Safeguard your innovations with our IP services, including trademarks, patents, copyrights, and licensing agreements.' },
    { id: 3, title: 'Contract Drafting & Negotiation', description: 'We offer comprehensive services for drafting, reviewing, and negotiating all types of business contracts, ensuring your legal rights are protected.' },
  ];


  const digitalServices = [
    { id: 1, title: 'Brand Strategy & Identity', description: 'We create brand strategies that align with your mission and resonate with your target audience Online & Offline.' },
    { id: 2, title: 'SEO & SEM & ORM', description: 'Customised SEO strategies and paid search advertising. Rank higher, attract more visitors, and convert them into customers.' },
    { id: 3, title: 'Social Media Marketing', description: "Boost your brand's presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. We craft compelling content and campaigns that engage and convert." },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#081a28] to-[#0d2b3d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
            Our Services
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Legal Services Card */}
          <div className="relative group bg-[#0f2a3f] rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6 text-center">
                Legal Services
              </h3>
              <ul className="space-y-5">
                {legalServices.map((service) => (
                  <li
                    key={service.id}
                    className="flex items-start p-4 rounded-xl bg-[#1a3648] hover:bg-[#1f4055] transition-colors duration-200"
                  >
                    <div className="shrink-0 mt-1 mr-4">
                      <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{service.title}</h4>
                      {/* Uncomment if adding descriptions */}
                      <p className="mt-1 text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Digital Services Card */}
          <div className="relative group bg-[#0f2a3f] rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6 text-center">
                Digital Services
              </h3>
              <ul className="space-y-5 ">
                {digitalServices.map((service) => (
                  <li
                    key={service.id}
                    className="flex items-start p-4 rounded-xl bg-[#1a3648] hover:bg-[#1f4055] transition-colors duration-200"
                  >
                    <div className="shrink-0 mt-1 mr-4">
                      <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{service.title}</h4>
                      <p className="mt-1 text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// import React from "react";

// const Services= () => {
//   const services = [
//     {
//       icon: "🚀", // Replace with your icon or an icon library like FontAwesome
//       title: "Digital Strategy",
//       description:
//         "Comprehensive digital roadmaps tailored to your business objectives and target audience.",
//       link: "#",
//     },
//     {
//       icon: "🎨", // Replace with your icon
//       title: "Brand Design",
//       description:
//         "Memorable visual identities that communicate your brand's core values and personality.",
//       link: "#",
//     },
//     {
//       icon: "📈", // Replace with your icon
//       title: "Marketing Growth",
//       description:
//         "Data-driven campaigns that drive measurable results and sustainable business growth.",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-lg text-gray-600">
//             We help brands grow through strategic digital solutions
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Icon */}
//               <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 mb-6">{service.description}</p>

//               {/* Link */}
//               <a
//                 href={service.link}
//                 className="text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300"
//               >
//                 Learn More →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;