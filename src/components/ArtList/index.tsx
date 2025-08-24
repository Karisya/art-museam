import React, { useState } from "react";
import Art from "../Art";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

interface Artworks{
    id:number;
    image_id:string;
    title:string;
    artist_display:string
}

interface ArtListProps{
    artworks:Artworks[]
}

const ArtList:React.FC<ArtListProps>=({artworks})=>{
    return(
    <Swiper
      modules={[ Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3} 
    >
      {artworks.map((art) => (
        <SwiperSlide key={art.id}>
          <Art artist_display={art.artist_display} 
                title={art.title}
                id={art.id}
                image_id={art.image_id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default ArtList