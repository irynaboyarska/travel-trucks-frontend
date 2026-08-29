'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';

type GalleryImage = {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
};

type CamperGalleryProps = {
  gallery: GalleryImage[];
};

const CamperGallery = ({ gallery }: CamperGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide key={image.id}>
            <Image src={image.original} alt="Camper" width={800} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide key={image.id}>
            <Image src={image.thumb} alt="Camper thumbnail" width={200} height={150} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
