"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header({
  initialLanguage = "en",
}: {
  initialLanguage?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = searchParams.get("lang") || initialLanguage;

  const handleToggle = () => {
    const newLang = language === "en" ? "bn" : "en";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full h-[4rem] px-2 md:px-4 lg:px-10 py-3">
      <div className="flex items-center justify-between">
        <Image
          src={"/10mslogo-svg.svg"}
          alt="10ms logo"
          width={120}
          height={120}
          className="hover:opacity-80 transition-opacity"
        />

        <div className="flex items-center justify-center gap-6">
          <div className="relative">
            <button
              onClick={handleToggle}
              className="flex items-center justify-between bg-white border border-gray-200 w-22 h-10 rounded-full px-3 relative cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1CAB55] focus:ring-opacity-50"
            >
              <span
                className={`text-sm font-medium ${
                  language === "bn" ? "text-[#1CAB55]" : "text-gray-500"
                }`}
              >
                EN
              </span>
              <span
                className={`text-sm font-medium ${
                  language === "en" ? "text-[#1CAB55]" : "text-gray-500"
                }`}
              >
                BN
              </span>
              <div
                className={`absolute top-1 bottom-2 left-1.5 w-8 h-8 bg-[#1CAB55] bg-opacity-20 rounded-full transition duration-300 ${
                  language === "en" ? "translate-x-0 " : "translate-x-10"
                }`}
              ></div>
              {/* <div
                className={`absolute top-1.5 w-7 h-7 bg-[#1CAB55] rounded-full shadow-md transition duration-300 flex items-center justify-center ${
                  language === "en" ? "left-1.5" : "right-1.5"
                }`}
              >
                <span className="text-white text-xs font-bold">
                  {language === "en" ? "EN" : "BN"}
                </span>
              </div> */}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 group">
            
              <FaPhoneAlt className="text-[#1CAB55] cursor-pointer text-lg" />
            
            <p className="text-[#1CAB55] font-bold cursor-pointer text-lg hidden sm:block">
              16910
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
