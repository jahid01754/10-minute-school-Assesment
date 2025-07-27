import Image from "next/image";
import LanguageButtton from "../LanguageButton/languageButton";
import { FaPhoneAlt } from "react-icons/fa";


export default function Header(){
    return(
        <>
            <div className="w-full h-[4rem] px-2 md:px-4 lg:px-10  py-3">
                <div className="flex items-center justify-between">
                    <Image 
                        src={"/10mslogo-svg.svg"}
                        alt="10ms logo"
                        width={120}
                        height={120}
                    />

                    <div className="flex items-center justify-center gap-4">
                        <LanguageButtton />
                        <div className="flex items-center justify-center gap-1">
                            <FaPhoneAlt className="text-[#1CAB55]"/>
                            <p className="text-[#1CAB55] font-bold">16910</p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}