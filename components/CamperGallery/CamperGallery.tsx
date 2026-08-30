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
import css from './CamperGallery.module.css';

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
    <div className={css.galleryWrapper}>
      <Swiper
        className={css.mainSwiper}
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide className={css.mainSlide} key={image.id}>
            <div className={css.mainImageWrapper}>
              <Image
                className={css.image}
                src={image.original}
                alt="Camper"
                fill
                sizes="(max-width: 768px) 100vw, 638px"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={css.thumbsSwiper}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide className={css.thumbSlide} key={image.id}>
            <div className={css.thumbImageWrapper}>
              <Image
                className={css.image}
                src={image.thumb}
                alt="Camper thumbnail"
                fill
                sizes="150px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
