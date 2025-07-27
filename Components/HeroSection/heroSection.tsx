"use client";

// import Image from "next/image";
import { useEffect } from "react";
import { Data } from "@/types/types";

type HomeProps = {
  data: Data | null;
};

export default function HeroSection({ data }: HomeProps) {
  useEffect(() => {
    console.log("Data: ", data);
  }, [data]);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg-imgae.jpg')" }}
    >
      <div className="container-custom relative w-full h-[19rem] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-end items-center">
          <div className="">
            <p className="text-white text-4xl font-semibold">{data?.title}</p>
            <div
              className="text-gray-100 text-lg font-semibold mt-4"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            />
          </div>
          <div className="h-[20rem] w-[70%] border border-red-400 mt-20"></div>
        </div>
      </div>
    </div>
  );
}
