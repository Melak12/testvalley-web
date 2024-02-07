'use client'
import { BannerModel } from '@/lib/models/banner-model'
import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface HomeBannerSliderProps {
    banners: BannerModel[]
}

const HomeBannerSlider = ({ banners }: HomeBannerSliderProps) => {
    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            breakpoints={{
                769: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
        >

            {
                banners.map((banner) => {
                    return (
                        <SwiperSlide key={banner.mainBannerId}>
                            {

                                banner.pcImageUrl && <img src={banner.pcImageUrl} />

                            }
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default HomeBannerSlider