"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

type HeroCardProps = {
  media: Array<{
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
  }>;
  thumbsSwiper: SwiperType | null;
  setThumbsSwiper: (swiper: SwiperType | null) => void;
};

export default function HeroCard({
  media,
  thumbsSwiper,
  setThumbsSwiper,
}: HeroCardProps) {
  return (
    <div className="relative h-auto w-[70%] mt-20 bg-white rounded-md     overflow-hidden">
      {media.length > 0 ? (
        <>
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/3 left-2 z-10 w-10 h-10  rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2 cursor-pointer">
            <IoIosArrowDropleft className="text-3xl text-white" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/3 right-2 z-10 w-10 h-10  rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2 cursor-pointer">
            <IoIosArrowDropright className="text-3xl text-white" />
          </div>

          {/* Main Swiper */}
          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mainSwiper"
          >
            {media.map((item, index) => (
              <SwiperSlide key={`main-${index}`}>
                <div className="p-4">
                  {item.resource_type === "image" ? (
                    <Image
                      src={item.resource_value}
                      alt={`Slide ${index + 1}`}
                      width={400}
                      height={160}
                      className="w-full h-40 object-cover rounded"
                      unoptimized
                    />
                  ) : item.resource_type === "video" ? (
                    <iframe
                      width="400"
                      height="160"
                      src={`https://www.youtube.com/embed/${item.resource_value}`}
                      title={`Video Slide ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-40 rounded"
                    ></iframe>
                  ) : (
                    <p>Unsupported media</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-3"
          >
            {media.map((item, index) => (
              <SwiperSlide
                key={`thumb-${index}`}
                className="px-2 transition-all duration-200"
              >
                <div className="relative group border-2 border-transparent rounded-md overflow-hidden swiper-slide-thumb-active:border-green-500 w-full h-14">
                  {item.resource_type === "image" ? (
                    <Image
                      src={item.resource_value}
                      alt={`Thumb ${index + 1}`}
                      width={80}
                      height={56}
                      className="w-full h-full object-cover cursor-pointer"
                      unoptimized
                    />
                  ) : item.resource_type === "video" ? (
                    <div className="relative w-full h-full rounded overflow-hidden cursor-pointer">
                      <Image
                        src={
                          item.thumbnail_url ||
                          `https://img.youtube.com/vi/${item.resource_value}/hqdefault.jpg`
                        }
                        alt={`Video Thumb ${index + 1}`}
                        width={80}
                        height={56}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 opacity-80"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5l14 7-14 7V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs">Unsupported media</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </>
      ) : (
        <p className="p-4 text-center text-white">No media content available.</p>
      )}
    </div>
  );
}
