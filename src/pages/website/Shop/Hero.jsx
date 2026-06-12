import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

 
const Hero = () => {
 
  return (
    <section className="relative h-screen max-h-[1000px]  overflow-hidden pt-30 ">
 
      {/* Background */}
 
      <img
        src= "/Shop/Shopbg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
 
      {/* Dark Overlay */}
 
      <div className="absolute inset-0 bg-black/55"></div>
 
      {/* Gradient Overlay */}
 
      <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/95 via-[#090909]/60 to-transparent"></div>
 
     
 
      {/* Main Content */}
 
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 flex items-center">
 
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full h-full">
 
          {/* Left */}
 
          <div className="flex flex-col items-start gap-8">
 
            {/* Badge */}
 
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#fe4462] bg-pink-500/10 backdrop-blur-md text-[#fe4462] text-sm font-semibold">
 
              <HiSparkles />
 
              HANDCRAFTED MINIATURES
 
            </div>
 
            {/* Heading */}
 
            <div className="space-y-5">
 
              <h1 className="text-white text-4xl md:text-6xl xl:text-7xl leading-[1.05] font-bold font-serif">
 
                Where Tiny Art
 
                <br />
 
                Comes to
 
                <span className="bg-[#fe4462] bg-clip-text text-transparent">
                  {" "}Life
                </span>
 
              </h1>
 
              <p className="text-gray-300 text-sm md:text-lg max-w-xl">
 
                Discover beautifully handcrafted miniature creations
                designed with precision, passion, and timeless artistry.
                Every piece tells a unique story.
 
              </p>
 
            </div>
 
            {/* Buttons */}
 
            <div className="flex flex-wrap gap-4">
 
              <a href="#products" className="group px-8 py-4 rounded-full bg-[#fe4462] border border-[#fe4462] text-white font-semibold flex items-center gap-3 hover:bg-transparent hover:text-[#fe4462] duration-200 shadow-xl cursor-pointer">

                Shop Collection

                <FaArrowRight className="group-hover:translate-x-1 duration-300" />

              </a>

              <Link to="/about" className="px-8 py-4 rounded-full border border-[#c89a61] text-[#d9b47c] hover:bg-[#c89a61] hover:text-white duration-200 flex items-center gap-3 cursor-pointer">

                <HiSparkles />

                Explore More

              </Link>
 
            </div>
 
 
          </div>
 
          {/* Right */}
 
          <div className="relative hidden lg:flex justify-center items-end self-end overflow-hidden">
 
         
 
     
            {/* Character */}
 
            <img
              src= "/hero/mm4.png"
              alt="Miniature Character"
              className="relative z-10 w-[500px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,.6)] translate-y-[80px]"
            />
 
          </div>
 
        </div>
 
      </div>
 
    </section>
  );
};
 
export default Hero;