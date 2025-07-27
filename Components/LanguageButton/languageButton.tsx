"use client";

import { useState } from "react";

export default function LanguageButtton(){

    const [language, setLanguage] = useState("en");

    const handleToggle = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    }

    return(
        <>
            <div className="">
                <button
                    onClick={handleToggle} 
                    className="border border-gray-200 w-[3.5rem] h-[1.5rem] rounded-2xl px-1 relative"   
                >
                    <div className={` bg-[#1CAB55] w-[1rem] h-[1rem] rounded-full transition duration-300 ${language === "en" ? "translate-x-0":"translate-x-8"}`}>
                    </div>

                    <span className={`absolute text-[12px] font-medium top-0.75 left-2 transition duration-300 ${language === "bn" ? "opcity-100%" : "opacity-0"}`}>
                        Eng
                    </span>

                    <span className={`absolute text-[12px] font-medium top-0.75 right-1 transition duration-300 ${language === "en" ? "opcity-100%" : "opacity-0"}`}>
                        বাংলা
                    </span>
                    
                </button>

            </div>
        </>
    );
}




