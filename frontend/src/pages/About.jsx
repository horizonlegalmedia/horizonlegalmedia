import React from 'react';
import ceo from '../../src/data/images/others/ceo.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* About Section with Floating Elements */}
      <section className="px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16 space-y-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                HORIZON LEGAL MEDIA GROUP
              </span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-gray-700 md:text-xl leading-relaxed font-medium">
                Navigating the intersection of <span className="text-blue-600 font-semibold">legal excellence</span> and <span className="text-purple-600 font-semibold">digital innovation</span>, we empower businesses to thrive in complex environments.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-white rounded-3xl shadow-2xl transform transition hover:scale-105">
                  <div className="text-blue-600 text-5xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Expertise</h3>
                  <p className="text-gray-600">10+ years of specialized legal consultation</p>
                </div>

                <div className="p-8 bg-white rounded-3xl shadow-2xl transform transition hover:scale-105">
                  <div className="text-purple-600 text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Mastery</h3>
                  <p className="text-gray-600">Cutting-edge marketing strategies & SEO optimization</p>
                </div>
              </div>
            </div>

            <div className="mt-16 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "Let's pioneer your digital future while safeguarding your legal present"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      </section>

      {/* CEO Section with 3D Effect */}
      <section className="px-4 py-12 md:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
            {/* 3D Card Effect */}
            <div className="lg:w-1/2 relative group perspective-1000">
              <div className="relative z-10 transform transition duration-700 group-hover:rotate-y-12">
                <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-2xl border-8 border-white/10">
                  <img
                    src={ceo}
                    alt="Shreya Gupta, CEO"
                    className="w-full h-full object-cover  group-hover:grayscale-0 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl transform translate-z-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition duration-700" />
            </div>

            {/* CEO Content */}
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                From The CEO'S Desk
              </h3>
              <blockquote className="text-xl md:text-2xl leading-relaxed font-medium relative pl-12">
                <div className="absolute left-0 top-0 text-8xl font-serif text-blue-400/20">“</div>
                <p className="relative z-10">
                  We don't just adapt to change - we <span className="text-blue-400">anticipate</span> it. Our approach combines <span className="text-purple-400">legal foresight</span> with <span className="text-blue-400">digital velocity</span>, creating a synergy that propels businesses beyond their competitive landscape.
                </p>
              </blockquote>

              <div className="mt-8 pl-12 border-l-4 border-blue-400 space-y-4">
                <div>
                  <p className="text-2xl font-bold">Shreya Gupta</p>
                  <p className="text-blue-200">CEO & Founder</p>
                </div>
                <div className="flex space-x-6">
                  <a href="https://www.instagram.com/shreya_legalconsultant_/" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-300">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM17.25 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                    </svg>

                  </a>
                  <a href="https://www.linkedin.com/in/shreya-gupta-63b3226b/" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-300">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 11.268h-3v-5.604c0-1.338-.028-3.063-1.866-3.063-1.869 0-2.156 1.46-2.156 2.966v5.701h-3v-10h2.879v1.367h.041c.401-.759 1.379-1.558 2.837-1.558 3.036 0 3.605 2 3.605 4.604v5.587z" />
                    </svg>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Background Elements */}
      <style jsx global>{`
    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-gradient-x {
      background-size: 200% auto;
      animation: gradient-x 6s ease infinite;
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float 8s ease-in-out infinite 2s;
    }
  `}</style>
    </div>
  );
};

export default About;