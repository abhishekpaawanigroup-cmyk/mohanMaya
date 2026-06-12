import React from "react";
import { FiStar } from "react-icons/fi";



export const products = [
  {
    id: 1,
    image: "/bestseller-image/mm4.png",
    name: "Mohan Maya",
    price: 66,
  },
  {
    id: 2,
    image: "/bestseller-image/mm5.png",
    name: "Mohan Maya",
    price: 66,
  },
  {
    id: 3,
    image: "/bestseller-image/mm6.png",
    name: "Mohan Maya",
    price: 66,
  },
  {
    id: 4,
    image: "/bestseller-image/mm7.png",
    name: "Mohan Maya",
    price: 66,
  },
  {
    id: 5,
    image: "/bestseller-image/mm4.png",
    name: "Mohan Maya",
    price: 66,
  },
  {
    id: 6,
    image: "/bestseller-image/mm5.png",
    name: "Mohan Maya",
    price: 66,
  },
];





const BestSellers = () => {
  return (
    <section className="bg-[#f5f0e8] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-12">
          <span className="inline-block bg-[transparent] text-[#c48212] border border-[#c48212] px-4 py-2 text-sm font-semibold uppercase rounded-full">
            This Week
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#c48212]">
            Best Sellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-16 gap-y-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-6 cursor-pointer"
            >
              {/* Image */}
              <div className="w-[180px] h-[140px] bg-transparent overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[20px] font-bold text-[#111] mb-2 transition-colors duration-300 ">
                  {item.name}
                </h3>

                <p className="text-[#ff7f50] text-LG font-medium mb-3">
                  INR {item.price.toFixed(2)}
                </p>

                {/* Rating */}
                <div className="flex gap-1 text-[#ff7f50]">
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;