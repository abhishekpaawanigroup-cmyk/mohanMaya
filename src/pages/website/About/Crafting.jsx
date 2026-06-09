import React from "react";
import {
  Lightbulb,
  PencilRuler,
  Box,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Concept & Story",
    desc: "Every miniature begins with a unique story and creative concept carefully planned by our artists.",
    icon: <Lightbulb size={28} />,
  },
  {
    id: "02",
    title: "Design & Sculpt",
    desc: "Our designers transform ideas into detailed digital and handcrafted miniature sculptures.",
    icon: <PencilRuler size={28} />,
  },
  {
    id: "03",
    title: "Painting & Finishing",
    desc: "Each piece is hand-painted with precision to capture every tiny detail and expression.",
    icon: <Sparkles size={28} />,
  },
  {
    id: "04",
    title: "Quality & Delivery",
    desc: "After strict quality checks, every collectible is carefully packed and prepared for its new home.",
    icon: <Box size={28} />,
  },
];

const CraftingProcess = () => {
  return (
    <section className="py-20 bg-[#ffe7ad]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#c48212] border border-[#c48212] rounded-full px-4 py-2 font-semibold uppercase tracking-widest">
            Behind The Magic
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#c48212] mt-3">
            Our Crafting Process
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            From imagination to reality, every miniature goes through a
            carefully crafted journey to ensure exceptional quality and detail.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-[#fafafa] p-8 rounded-3xl border border-gray-200 hover:border-[#ff8d36] hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute top-5 right-5 text-5xl font-bold text-[#ffeadb]">
                {step.id}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-[#fce6b3] text-orange-500 flex items-center justify-center mb-6 group-hover:bg-[#ff8d36] group-hover:text-white transition-all">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftingProcess;