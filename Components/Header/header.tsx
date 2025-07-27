import Image from "next/image";
import LanguageButtton from "../LanguageButton/languageButton";

export default function Header(){
    return(
        <>
            <div className="w-full h-[4rem] shadow-lg px-2 md:px-4 lg:px-10  py-3">
                <div className="flex items-center justify-between">
                    <Image 
                        src={"/10mslogo-svg.svg"}
                        alt="10ms logo"
                        width={120}
                        height={120}
                    />
                    <LanguageButtton/>
                    
                </div>

            </div>
        </>
    );
}