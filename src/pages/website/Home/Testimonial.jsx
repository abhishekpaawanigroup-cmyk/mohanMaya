import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaStar, FaRegStar } from "react-icons/fa";



import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ralph Edwards",
    role: "UI/UX Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum viverra eget felis interdum.",
  },
  {
    name: "Jerome Bell",
    role: "Web Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum viverra eget felis interdum.",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum viverra eget felis interdum.",
  },
  {
    name: "John Smith",
    role: "Interior Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum viverra eget felis interdum.",
  },
];

function Testimonials() {
  return (
    <section
      className="relative py-24 bg-[url('/testimonials-images/bg.png')] bg-cover bg-center"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-transparent text-[#ff7f50] border border-[#ff7f50] px-4 py-2 text-sm font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-5">
            Client Feedback
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 min-h-[280px] relative">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-500 mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mb-6">
                  {item.role}
                </p>

                <p className="text-gray-600 leading-8">
                  {item.review}
                </p>

                <span className="absolute top-6 right-6 text-4xl text-[#ff7f50]">
                  <FaQuoteRight />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-5 mt-14">
          <button className="custom-prev w-14 h-14 rounded-full border border-[#ff7f50] text-[#ff7f50] hover:bg-[#ff7f50] hover:text-white transition">
            <FaArrowLeftLong className="mx-auto"/>
          </button>

          <button className="custom-next w-14 h-14 rounded-full border border-[#ff7f50] text-[#ff7f50] hover:bg-[#ff7f50] hover:text-white transition">
           <FaArrowRightLong className="mx-auto"/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;