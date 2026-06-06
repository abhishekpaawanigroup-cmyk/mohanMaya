import React from "react";
import { FiStar } from "react-icons/fi";



export const products = [
  {
    id: 1,
    image: "/bestseller-image/sell2.png",
    name: "Stylish Grey Chair",
    price: 66,
  },
  {
    id: 2,
    image: "/bestseller-image/sell3.png",
    name: "Chair Pillow",
    price: 66,
  },
  {
    id: 3,
    image: "/bestseller-image/sell4.png",
    name: "Alexander Roll Chair",
    price: 66,
  },
  {
    id: 4,
    image: "/bestseller-image/sell5.png",
    name: "Wooden Chair",
    price: 66,
  },
  {
    id: 5,
    image: "/bestseller-image/sell1.png",
    name: "Chair Pillow",
    price: 66,
  },
  {
    id: 6,
    image: "/bestseller-image/sell3.png",
    name: "Seater Gray Sofa",
    price: 66,
  },
];





const BestSellers = () => {
  return (
    <section className="bg-[#5dcafcf2] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-12">
          <span className="inline-block bg-transparent text-[#ff7f50] border border-[#ff7f50] px-4 py-2 text-sm font-semibold uppercase">
            This Week
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0f3439]">
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
                  className="w-[110px] h-[110px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[20px] font-bold text-[#111] mb-2 transition-colors duration-300 ">
                  {item.name}
                </h3>

                <p className="text-[#ff7f50] text-xl font-medium mb-3">
                  USD {item.price.toFixed(2)}
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