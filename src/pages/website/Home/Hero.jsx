import { useState, useEffect, useCallback } from "react";



const slides = [
  {
    id: 1,
    badge: "NEW ARRIVAL...",
    title: ["Welcome", "To The", "Mini World"],
    description:
      "Miniatures can range in size from tiny figurines that can fit on the tip of a finger to larger models that may be a few inches in height or length.",
    image: "/hero-image/mm1.jpeg",
    accent: "#ff7f50",
    
  },
  {
    id: 2,
    badge: "BEST SELLER...",
    title: ["Amazing", "Miniature", "Collection"],
    description:
      "Explore handcrafted miniature products designed with precision and creativity.",
    image: "/hero-image/mm2.jpeg",
    accent: "#ff7f50",
  },
  {
    id: 3,
    badge: "LIMITED EDITION...",
    title: ["Creative", "Tiny", "Designs"],
    description:
      "Unique miniature pieces made for collectors and enthusiasts.",
    image: "/hero-image/mm3.jpeg",
    accent: "#ff7f50",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;

      setDirection(index > current ? 1 : -1);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen grid lg:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <span className="inline-block border border-[#ff7f50] text-[#ff7f50] px-4 py-2 tracking-[3px] text-sm mb-6">
            {slide.badge}
          </span>

          <h1 className="text-white font-black leading-none mb-6 text-[clamp(3rem,6vw,5rem)]">
            {slide.title.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="text-gray-300 max-w-lg leading-8 mb-10">
            {slide.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#ff7f50] text-white px-8 py-4 font-medium hover:bg-white hover:text-[#ff7f50] transition-all duration-300">
              BUY NOW →
            </button>

            <button className="border border-[#ff7f50] text-[#ff7f50] px-8 py-4 font-medium hover:bg-[#ff7f50] hover:text-white transition-all duration-300">
              VIEW DETAILS →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white/20 backdrop-blur-sm">
            <img
              src={slide.image}
              alt={slide.title[0]}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-20 right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "w-4 h-4 bg-[#ff7f50]"
                : "w-2 h-2 border border-[#ff7f50]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}