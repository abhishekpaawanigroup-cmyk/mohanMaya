import { useState, useEffect, useCallback } from "react";

import Mini1 from "./../../../assets/images/mini1.png";
import Mini2 from "./../../../assets/images/mini2.png";
import Mini3 from "./../../../assets/images/mini3.png";

const slides = [
  {
    id: 1,
    badge: "NEW ARRIVAL...",
    title: ["Elevate", "Your Home", "Aesthetics"],
    description:
      "A furniture e-commerce company operates in the digital space, offering a wide range of furniture products for sale through an online platform.",
    image: Mini1,
    accent: "#ff7f50",
  },
  {
    id: 2,
    badge: "BEST SELLER...",
    title: ["Redefine", "Modern", "Living"],
    description:
      "Discover our curated collection of contemporary furniture designed to transform your living spaces into something truly extraordinary.",
    image: Mini2,
    accent: "#ff7f50",
  },
  {
    id: 3,
    badge: "LIMITED EDITION...",
    title: ["Craft Your", "Perfect", "Sanctuary"],
    description:
      "Premium handcrafted furniture pieces that blend timeless elegance with modern comfort, made for those who appreciate fine design.",
    image: Mini3,
    accent: "#ff7f50",
  },
];

const DotPattern = ({ className }) => (
  <svg
    className={className}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
  >
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 8 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 16 + 8}
          cy={row * 16 + 8}
          r="2"
          fill="#ff7f50"
          fillOpacity="0.5"
        />
      ))
    )}
  </svg>
);

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
    <div
      className="relative min-h-screen overflow-hidden bg-[#f8f9fa]"
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .dm {
          font-family: 'DM Sans', sans-serif;
        }

        .slide-enter {
          opacity: 0;
          transform: translateX(${direction > 0 ? "40px" : "-40px"});
        }

        .slide-active {
          opacity: 1;
          transform: translateX(0);
          transition: all .4s ease;
        }

        .image-enter {
          opacity: 0;
          transform: scale(.9);
        }

        .image-active {
          opacity: 1;
          transform: scale(1);
          transition: all .5s ease;
        }
      `}</style>

      <DotPattern className="absolute top-0 left-0 opacity-60" />
      <DotPattern className="absolute bottom-0 right-0 opacity-60" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 min-h-screen grid lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div>
          <div
            className={`dm inline-block border px-3 py-1 text-xs tracking-[3px] mb-6 ${
              animating ? "slide-enter" : "slide-active"
            }`}
            style={{
              borderColor: slide.accent,
              color: slide.accent,
            }}
          >
            {slide.badge}
          </div>

          <h1
            className={`font-black text-[#0f3439] leading-none mb-6 ${
              animating ? "slide-enter" : "slide-active"
            }`}
            style={{
              fontSize: "clamp(3rem,6vw,5rem)",
            }}
          >
            {slide.title.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className={`dm text-[#0f3439] max-w-md leading-7 mb-10 ${
              animating ? "slide-enter" : "slide-active"
            }`}
          >
            {slide.description}
          </p>

          <div
            className={`flex gap-4 flex-wrap ${
              animating ? "slide-enter" : "slide-active"
            }`}
          >
            <button
              className="px-7 py-3 text-white text-sm tracking-wider"
              style={{
                backgroundColor: slide.accent,
              }}
            >
              BUY NOW →
            </button>

            <button
              className="px-7 py-3 border text-sm tracking-wider"
              style={{
                borderColor: slide.accent,
                color: slide.accent,
              }}
            >
              VIEW DETAILS →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center w-[400px] h-[400px] overflow-hidden rounded-full">
          <img
            src={slide.image}
            alt="Furniture"
            className={`w-full h-full object-fill max-w-[600px] drop-shadow-2xl ${
              animating ? "image-enter" : "image-active"
            }`}
          />
        </div>
      </div>

      {/* RIGHT DOT NAVIGATION */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goTo(index)}
            className="rounded-full border-2 transition-all"
            style={{
              width: index === current ? "12px" : "8px",
              height: index === current ? "12px" : "8px",
              borderColor:
                index === current ? slide.accent : "#ff7f50",
              background:
                index === current ? slide.accent : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
}