import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FiEye,
  FiHeart,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Krishna from "../../../assets/website/Krishna.jpeg";
import Radha from "../../../assets/website/RadhaJi.jpeg";
import madhav from "../../../assets/website/Madhav.jpeg";
import mother from "../../../assets/website/Mother.jpeg";
import maya from "../../../assets/website/Maya.jpeg";
import Shiva from "../../../assets/website/Shiva.jpeg";
import Madhvi from "../../../assets/website/Madhvi.jpeg";

const Hero = () => {
  const characters = [
    { name: "Krishna", image: Krishna },
    { name: "Radha Ji", image: Radha },
    { name: "Madhav", image: madhav },
    { name: "Mother", image: mother },
    { name: "Maya", image: maya },
    { name: "Shiva", image: Shiva },
    { name: "Madhvi", image: Madhvi },
  ];
  return (
    <div className="relative">
      <div className="w-full  h-[700px] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/home/Sideshow_Bo-Katan-Kryze_PF_300889_2026_Hero-Banner_Desktop2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-white z-20 px-4">
          <h1 className="font-bold text-[48px]">
            Where Tiny Art Comes to Life
          </h1>
          <p className="text-[24px] leading-[1.3] w-[650px]">
            Explore a unique collection of miniature crafts that capture
            extraordinary detail and timeless craftsmanship.
          </p>
          <button className="mt-5 px-5 py-2.5 bg-[#bf945c] rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
      <div className=" z-12 relative mt-[-152px] w-[70%] mx-auto ">
        <button className="custom-hero-prev absolute left-0 top-[50%] -translate-y-1/2 z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center -translate-x-1/2 justify-center  border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-hero-next absolute right-0 top-[50%] -translate-y-1/2 z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center translate-x-1/2 justify-center border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
          <FiChevronRight size={26} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-hero-prev",
            nextEl: ".custom-hero-next",
          }}
          spaceBetween={20}
          loop={true}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {characters.map((char, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="rounded-[8px] h-[300px] overflow-hidden relative cursor-pointer after:content-[''] after:absolute after:inset-0 after:bg-black/10 transition">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                  <h2 className="text-xl font-semibold text-white absolute bottom-0 left-0 right-0 z-20 bg-[#bf945c] text-center">
                    {char.name}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
