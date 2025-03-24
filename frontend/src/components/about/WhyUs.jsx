import React from 'react'
import { Link } from 'react-router-dom'
import { whyUs } from '../../data/about/aboutUsData'

const WhyUs = () => {
    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the unique advantages that set us apart from the competition
                    </p>
                </div>

                <ul className="grid md:grid-cols-2 gap-8">
                    {whyUs.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <svg
                                className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/** Optional CTA */}
                <div className="mt-12  py-8 text-center">
                    <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Your Journey
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
