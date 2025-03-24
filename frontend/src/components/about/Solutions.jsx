import React from 'react'
import { solutions } from '../../data/about/aboutUsData'

const Solutions = () => {
    return (
        <section className="py-8 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        How We Solve These Challenges
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        solutions.map((solution, index) => (
                            <div key={index} className="p-6 bg-white rounded-2xl">
                                <div className={`w-12 h-12 bg-${solution.color}-100 rounded-lg mb-4 flex items-center justify-center`}>
                                    <svg className={`w-6 h-6 text-${solution.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {Array.isArray(solution.icon) ?
                                            solution.icon.map((path, i) => (
                                                <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                                            )) :
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                                        }
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-green-500">✓</span>
                                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                                </div>
                                <p className="text-gray-600">
                                    {solution.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Solutions
