import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";


import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";



import { videos } from '../../data/videos'
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const ConceptVideos = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: false,
        }}
        initialSlide="4"
        pagination={false}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next"
        }}
        centeredSlidesBounds={false}
        autoHeight={true}
        className="mySwiper"
        breakpoints={{
          750: {
            slidesPerView: 3
          }
        }}
      >
        {
          videos.map(video => (
            <SwiperSlide>
              <iframe src={video.videoURL} className={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default ConceptVideos
