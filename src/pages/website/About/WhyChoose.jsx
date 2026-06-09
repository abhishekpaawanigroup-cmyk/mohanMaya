import React from "react";
import {
  Award,
  Palette,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: <Palette size={28} />,
    title: "Handcrafted Excellence",
    description:
      "Every miniature is carefully designed and handcrafted with attention to the smallest details.",
  },
  {
    icon: <Award size={28} />,
    title: "Premium Quality",
    description:
      "We use high-quality materials and advanced techniques to ensure durability and perfection.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Craftsmanship",
    description:
      "Our skilled artists bring years of experience and passion into every collectible we create.",
  },
  {
    icon: <Truck size={28} />,
    title: "Safe Delivery",
    description:
      "Each product is securely packaged and delivered with care to reach you in perfect condition.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#ffd8df]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#fe4462] border border-[#fe4462] rounded-full px-4 py-2 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#fe4462] mt-3">
            Crafted With Passion,
            <br />
            Designed To Inspire
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5">
            We combine creativity, craftsmanship, and quality to create
            miniature collectibles that tell unique stories and leave a
            lasting impression.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#ffd8df] text-[#fe4462] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#ffd8df] border-2 border-[#fe4462] text-[#fe4462] rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-3">
            Bringing Imagination To Life
          </h3>

          <p className="max-w-2xl mx-auto">
            From concept to creation, every miniature is crafted with
            precision, passion, and a commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;