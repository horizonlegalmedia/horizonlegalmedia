import React from 'react'
import { challenges } from '../../data/about/aboutUsData'

const Challenges = () => {
    return (
        <section className="py-8 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                        The challenges we help you overcome
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="group relative pb-4 md:pb-0"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                                        {index + 1}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {challenge.title}
                                    </h3>
                                    {challenge.description && (
                                        <p className="text-gray-600 leading-relaxed">
                                            {challenge.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Mobile divider */}
                            {index < challenges.length - 1 && (
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 md:hidden" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden md:block absolute inset-0 left-1/2 -translate-x-1/2 w-px h-[75%] bg-gray-200 top-24" />
            </div>
        </section>
    )
}

export default Challenges
