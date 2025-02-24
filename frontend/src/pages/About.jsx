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
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-300">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
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