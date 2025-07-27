import Image from "next/image";

export default function HeroSection(){
    return(
        <>
            <div className="w-full h-[19rem] shadow-lg">
                <Image 
                    src={"/hero-bg-imgae.jpg"}
                    alt="Hero Section Background Image"
                    width={800}
                    height={200}
                    className="w-full"
                />

            </div>
        </>
    );
}