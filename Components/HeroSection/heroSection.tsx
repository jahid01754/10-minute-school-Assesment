"use client";

import { useEffect, useState } from "react";
import HeroCard from "../HeroCard/heroCard";
import { Data } from "@/types/types";
import type { Swiper as SwiperType } from "swiper";

type HomeProps = {
  data: Data | null;
};

export default function HeroSection({ data }: HomeProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    console.log("HeroSection Data: ", data);
  }, [data]);

  const media = data?.media || [];

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg-imgae.jpg')" }}
    >
      <div className="container-custom relative w-full h-[19rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-end items-center">
          {/* Left side */}
          <div>
            <p className="text-white text-4xl font-semibold">{data?.title}</p>
            <div
              className="text-gray-100 text-lg font-semibold mt-4"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            />
          </div>

          {/* Right side */}
          <HeroCard
            media={media}
            thumbsSwiper={thumbsSwiper}
            setThumbsSwiper={setThumbsSwiper}
          />
        </div>
      </div>
    </div>
  );
}
