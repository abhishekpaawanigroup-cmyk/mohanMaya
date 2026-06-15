import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen max-h-[1000px] bg-cover bg-bottom"
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
            Every Miniature Has <br/> <span className="text-[#fe4462]">A Story</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            We transform imagination into handcrafted miniatures, designed to capture emotions , memories and timeless moments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="px-6 py-3 bg-[#fe4462] border border-[#fe4462] hover:bg-transparent hover:text-[#fe4462] hover:border-[#fe4462] rounded-full font-medium transition cursor-pointer">
              Get Started
            </Link>

            <Link to="/contact" className="px-6 py-3 border border-white hover:bg-[#fe4462] hover:text-[#fff] hover:border-[#fe4462] rounded-full font-medium transition cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;