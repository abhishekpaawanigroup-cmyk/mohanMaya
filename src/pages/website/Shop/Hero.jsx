import React from "react";

const HeroShop = () => {
  return (
    <section
      className="relative h-screen lg:h-[80vh] bg-cover bg-bottom mt-[90px]"
      style={{
        backgroundImage:
          "url('/About/Hero/about-banner.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Discover Our Miniature <br/> Collection
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Browse our growing collection of premium miniature models. From seasonal favorites to limited editions, there's something for every enthusiast.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#fe4462] border border-[#fe4462] hover:bg-transparent hover:text-[#fe4462] hover:border[#fe4462] rounded-full font-medium transition cursor-pointer">
              Get Started
            </button>

            <button className="px-6 py-3 border border-white hover:bg-[#fe4462] hover:text-[#fff] hover:border-[#fe4462] rounded-full font-medium transition cursor-pointer">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShop;