import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ourClients } from '../../data/images/clients/ourClients';

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
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
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
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper !px-4 sm:!px-8"
                    >
                        {ourClients.map((client) => (
                            <SwiperSlide
                                key={client.id}
                                className="!flex !items-center !justify-center !h-auto py-4"
                            >
                                <div className="relative group w-40 h-40 2xl:w-64 2xl:h-64 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br rounded-full" />
                                    <div className="absolute inset-0 rounded-full bg-white overflow-hidden">
                                        <img
                                            src={client.url}
                                            alt={client.name}
                                            className="object-cover object-center w-full h-full 
            transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation */}
                        <div className="swiper-button-prev !text-white font-bold !w-10 !h-10 after:!text-xl" />
                        <div className="swiper-button-next !text-white font-bold !w-10 !h-10 after:!text-xl" />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurClients


