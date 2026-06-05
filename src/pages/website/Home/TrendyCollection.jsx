import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FiHeart,
  FiEye,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import ActionButton from "../../../components/common/ActionButton";

import "swiper/css";
import "swiper/css/navigation";

const productData = {
  all: [
    {
      id: 1,
      name: "Miniature tree",
      price: 150,
      image:
        "/trandy-images/product-1.png",
      discount: "10% Off",
    },
    {
      id: 2,
      name: "Miniature home",
      price: 190,
      image:
        "/trandy-images/product-2.png",
    },
    {
      id: 3,
      name: "Miniature Car",
      price: 300,
      image:
        "/trandy-images/product-3.png",
      discount: "15% Off",
    },
    {
      id: 4,
      name: "Miniature Basket",
      price: 129,
      image:
        "/trandy-images/product-4.png",
    },
    {
      id: 2,
      name: "Miniature home",
      price: 190,
      image:
        "/trandy-images/product-2.png",
    },
  ],

  newIn: [
    {
      id: 5,
      name: "Miniature Tree",
      price: 220,
      image:
        "/trandy-images/product-1.png",
      discount: "20% Off",
    },
    {
      id: 6,
      name: "Miniature Home",
      price: 175,
      image:
        "/trandy-images/product-2.png",
    },
    {
      id: 7,
      name: "Miniature Car",
      price: 280,
      image:
        "/trandy-images/product-3.png",
    },
    {
      id: 8,
      name: "Miniature Basket",
      price: 149,
      image:
        "/trandy-images/product-4.png",
    },
  ],

  topRated: [
    {
      id: 9,
      name: "Royal Blue Sofa",
      price: 350,
      image:
        "/trandy-images/product-1.png",
      discount: "25% Off",
    },
    {
      id: 10,
      name: "Classic Wooden Chair",
      price: 210,
      image:
        "/trandy-images/product-2.png",
    },
    {
      id: 11,
      name: "Premium Grey Sofa",
      price: 330,
      image:
        "/trandy-images/product-3.png",
    },
    {
      id: 12,
      name: "Luxury Lounge Chair",
      price: 280,
      image:
        "/trandy-images/product-4.png",
    },
  ],

  tensingItems: [
    {
      id: 13,
      name: "Leather Chair",
      price: 260,
      image:
        "/trandy-images/product-1.png",
      discount: "30% Off",
    },
    {
      id: 14,
      name: "Velvet Armchair",
      price: 180,
      image:
        "/trandy-images/product-2.png",
    },
    {
      id: 15,
      name: "Office Chair",
      price: 220,
      image:
        "/trandy-images/product-3.png",
    },
    {
      id: 16,
      name: "Comfort Sofa",
      price: 400,
      image:
        "/trandy-images/product-4.png",
    },
    {
      id: 17,
      name: "ujjawal",
      price: 400,
      image:
        "/trandy-images/product-1.png",
    },
  ],
};

const tabs = [
  {
    label: "All Collection",
    value: "all",
  },
  {
    label: "New In",
    value: "newIn",
  },
  {
    label: "Top Rated",
    value: "topRated",
  },
  {
    label: "Tensing Items",
    value: "tensingItems",
  },
];

const TrendyCollection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [wishlist, setWishlist] = useState({});

  const handleAddToCart = (productId, productName) => {
    console.log(`Added to cart: ${productName}`);
  };

  const handleQuickView = (productId) => {
    console.log(`Quick view: ${productId}`);
  };

  const handleAddToWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-350 mx-auto  relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-14">
          <div>
            <span className="bg-transparent text-[#0892d0] border border-[#0892d0] px-4 py-2 text-sm font-semibold uppercase">
              This Month
            </span>

            <h2 className="text-5xl font-bold text-[#0f3439] mt-4">
              Trendy Collection
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-12 mt-8 lg:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-2 text-lg font-medium transition-all ${
                  activeTab === tab.value
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {activeTab === tab.value && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#c1965e] text-white text-xs font-bold px-3 py-1 rounded">
                    {productData[tab.value].length}
                  </span>
                )}

                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-trendy absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2  z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center  border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-next-trendy absolute translate-x-1/2 -translate-y-1/2 right-0 top-[50%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
          <FiChevronRight size={26} />
        </button>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev-trendy",
            nextEl: ".custom-next-trendy",
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
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
              slidesPerView: 4,
            },
          }}
        >
          {productData[activeTab].map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col h-full">
                {/* Product Card */}
                <div className="group relative bg-[#b7f1fb] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Discount Badge */}
                  {item.discount && (
                    <span className="absolute top-6 left-6 z-10 bg-[#c1965e] text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {item.discount}
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="h-87.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[65%] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Action Icons on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4 items-center">
                      <ActionButton
                        icon={FiShoppingBag}
                        label="Add to Cart"
                        onClick={() => handleAddToCart(item.id, item.name)}
                      />
                      <ActionButton
                        icon={FiEye}
                        label="Quick View"
                        onClick={() => handleQuickView(item.id)}
                      />
                      <ActionButton
                        icon={FiHeart}
                        label="Add to List"
                        onClick={() => handleAddToWishlist(item.id)}
                        className={
                          wishlist[item.id] ? "bg-red-500 hover:bg-red-600" : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-6 flex-grow">
                  <h3 className="text-lg font-bold text-[#1d1d1d] line-clamp-2 hover:text-[#c1965e] transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex gap-1 text-[#c1965e] text-sm mt-2">
                    ★★★★★
                  </div>

                  <p className="text-[#c1965e] text-base font-semibold mt-3">
                    USD {item.price}.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendyCollection;
