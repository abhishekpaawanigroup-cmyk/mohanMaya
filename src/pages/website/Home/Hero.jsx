import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import LazyVideo from "../../../components/common/LazyVideo";

import madhav from "../../../assets/website/Madhav.jpeg";
import mother from "../../../assets/website/Mother.jpeg";
import maya from "../../../assets/website/Maya.jpeg";
import Shiva from "../../../assets/website/Shiva.jpeg";
import Madhvi from "../../../assets/website/Madhvi.jpeg";

import "swiper/css";
import "swiper/css/navigation";

// Lazy so the three.js bundle only downloads when a popup is opened.
const CharacterModelViewer = lazy(() => import("./CharacterModelViewer"));

const Hero = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    {
      name: "Mohan Maya",
      image: "/hero/mm.jpeg",
      model: "/models/mohan-maya.glb",
      description:
        "Lord Krishna is revered as the embodiment of love, wisdom, and divine guidance. His teachings in the Bhagavad Gita continue to inspire millions around the world.",
    },
    {
      name: "Radha Ji",
      image: "/hero/radhaji.jpg",
      model: "/models/radha-ji.glb",
      description:
        "Radha symbolizes pure devotion and eternal love. Her bond with Krishna represents the highest form of spiritual connection.",
    },
    {
      name: "Madhav",
      image: madhav,
      model: "/models/madhav.glb",
      description:
        "Madhav is a representation of grace, compassion, and inner strength. His presence brings peace and inspiration.",
    },
    {
      name: "Mother",
      image: mother,
      model: "/models/mother.glb",
      description:
        "A symbol of unconditional love, sacrifice, and nurturing care. Mothers hold a special place in every heart.",
    },
    {
      name: "Maya",
      image: maya,
      model: "/models/maya.glb",
      description:
        "Maya represents beauty, mystery, and the fascinating illusionary nature of life and existence.",
    },
    {
      name: "Shiva",
      image: Shiva,
      model: "/models/shiva.glb",
      description:
        "Lord Shiva is known as the destroyer of negativity and the transformer of life. He symbolizes power, meditation, and balance.",
    },
    {
      name: "Madhvi",
      image: Madhvi,
      model: "/models/madhvi.glb",
      description:
        "Madhvi represents elegance, devotion, and strength. Her character reflects resilience and grace.",
    },
  ];

  return (
    <div className="relative pb-10 mt-20 bg-[#f4edee] dark:bg-[#0d0508]">
      {/* Hero Video Section */}
      <div className="w-full h-[480px] sm:h-[600px] lg:h-[750px] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-10">
        <LazyVideo
          src="/hero/mohan-maya.mp4"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 z-20 w-full px-4 text-center text-white -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-4xl md:text-6xl">
            Where Tiny Art Comes <br/> <span className="text-[#fe4462]">to Life</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-[650px] mx-auto mt-4">
            Explore a unique collection of miniature crafts that capture
            extraordinary detail and timeless craftsmanship.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block px-6 py-3 bg-[#ef4462] border border-[#ef4462] rounded-[30px] hover:bg-transparent hover:border-white transition-all duration-300 cursor-pointer"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative z-20 mt-[-100px] sm:mt-[-130px] lg:mt-[-152px] w-[90%] lg:w-[70%] max-w-[1440px] mx-auto">
        <button className="custom-hero-prev absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#ef4462] hover:text-white transition">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-hero-next absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#ef4462] hover:text-white transition">
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
          {characters.map((char, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => setSelectedCharacter(char)}
                className="rounded-md h-[300px] overflow-hidden relative cursor-pointer group"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <h2 className="text-xl font-semibold text-white absolute bottom-0 left-0 right-0 z-10 bg-[#f04764] text-center py-2">
                  {char.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



      {/* Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCharacter(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="relative h-[300px] sm:h-[360px] md:h-[400px] bg-gradient-to-br from-[#f4edee] to-white">
                {/* 3D model (replaces the popup image). `key` forces a clean
                    remount so it renders correctly on every open/close/reopen. */}
                <Suspense
                  fallback={
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full border-4 border-[#fe4462]/30 border-t-[#fe4462] animate-spin" />
                      <span className="text-xs font-medium text-gray-500">Loading 3D…</span>
                    </div>
                  }
                >
                  <CharacterModelViewer
                    key={selectedCharacter.model}
                    modelPath={selectedCharacter.model}
                  />
                </Suspense>

                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="absolute top-4 right-4 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#fe4462] hover:text-white transition"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-[#fe4462] mb-4">
                  {selectedCharacter.name}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {selectedCharacter.description}
                </p>

               <Link
  to="/shop"
  onClick={() => setSelectedCharacter(null)}
  className="mt-6 inline-block bg-[#fe4462] text-white px-6 py-3 rounded-[30px] hover:bg-[#da4059] transition cursor-pointer"
>
  Explore Now
</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;