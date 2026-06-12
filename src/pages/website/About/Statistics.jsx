import React from "react";

const stats = [
  {
    number: "5K+",
    title: "Happy Customers",
  },
  {
    number: "10K+",
    title: "Miniatures Crafted",
  },
  {
    number: "50+",
    title: "Unique Designs",
  },
  {
    number: "99%",
    title: "Customer Satisfaction",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#c48212] border border-[#c48212] rounded-full px-4 py-2 font-semibold uppercase tracking-widest">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#c48212] mt-3">
            Numbers That Speak
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            Our journey is reflected through the trust of our customers
            and the passion behind every miniature we create.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#ffd8df] rounded-3xl p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#c48212] mb-3">
                {item.number}
              </h3>

              <p className="text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;