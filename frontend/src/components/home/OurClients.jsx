import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { selectionPoint, houseOfNaksh, iforumLawyers, divineEnergies } from '../../data/images/clients'


const ourClients = [
    {
        id: 1,
        name: "Selection Point",
        url: selectionPoint
    },
    {
        id: 2,
        name: "House Of Naksh",
        url: houseOfNaksh
    },
    {
        id: 3,
        name: "iforumLawyers",
        url: iforumLawyers
    },
    {
        id: 4,
        name: "divineEnergies",
        url: divineEnergies
    },
]

const OurClients = () => {
    return (
        <section className='bg-gradient-to-br from-gray-900 to-blue-900 text-white'> 
            <div className='container mx-auto px-4 py-8 '>
                <h1 className='text-center font-bold text-4xl mb-8'>Our Clients</h1>
                <div className='px-4 md:px-8 lg:px-20 py-12 relative'>
                    {/* <div className="absolute inset-0" /> */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            420: {
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false,
                            },
                            820: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                                centeredSlides: false,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                centeredSlides: false,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper !px-4 sm:!px-8"
                    >
                        {ourClients.map((client) => (
                            <SwiperSlide
                                key={client.id}
                                className="!flex !items-center !justify-center !h-auto py-4"
                            >
                                <div className="relative group w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br rounded-full" />
                                    <img
                                        src={client.url}
                                        alt={client.name}
                                        className="object-contain object-top rounded-full shadow-xl w-full h-full
                                        transition-transform duration-300 group-hover:scale-105 bg-white"    
                                        // style={{ display: 'block' }} // Critical for Swiper centering
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation */}
                        <div className="swiper-button-prev !text-gray-800 font-bold !w-10 !h-10 after:!text-xl" />
                        <div className="swiper-button-next !text-gray-800 font-bold !w-10 !h-10 after:!text-xl" />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurClients
