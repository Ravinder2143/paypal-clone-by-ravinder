"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="relative my-10">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div>
                    <Image
                        src="/main.jpeg"
                        width={1920}
                        height={693}
                        alt="daddy"
                        className="w-full h-auto"
                    />
                </div>
                {/* Slide 2 (same image for now) */}
                <div>
                    <Image
                        src="/WhatsApp Image 2024-11-19 at 9.05.38 PM.jpeg"
                        width={1920}
                        height={693}
                        alt="daddy"
                        className="w-full h-auto"
                    />
                </div>
                
                
            </Slider>
            <div className="absolute inset-0 flex justify-center flex-col text-white px-20">
                <div className="text-wrap">
                    <h1 className="text-4xl font-bold">
                        Sell just about <br /> anywhere in the <br /> world
                    </h1>
                    <p className="text-3xl font-medium my-3">
                        Whether you have an online shop or <br /> need to accept payments remotely, we <br /> can help you get paid fast.
                    </p>
                </div>
                <div className="flex space-x-7 mt-10">
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-white hover:text-black">
                        Sign Up
                    </button>
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-white hover:text-black">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
