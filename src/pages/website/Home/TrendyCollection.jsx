import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductPreviewModal from "./Productmodal";
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
      name: "Mohan Maya",
      price: 150,
      image:
        "/trandy-images/mm4.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 2,
      name: "Mohan Maya",
      price: 190,
      image:
        "/trandy-images/mm5.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 3,
      name: "Mohan Maya",
      price: 300,
      image:
        "/trandy-images/mm6.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 4,
      name: "Mohan Maya",
      price: 129,
      image:
        "/trandy-images/mm7.png",
        gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 2,
      name: "Mohan Maya",
      price: 190,
      image:
        "/trandy-images/mm5.png",
        gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
  ],

  newIn: [
    {
      id: 5,
      name: "Mohan Maya",
      price: 220,
      image:
        "/trandy-images/mm4.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 6,
      name: "Mohan Maya",
      price: 175,
      image:
        "/trandy-images/mm5.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 7,
      name: "Mohan Maya",
      price: 280,
      image:
        "/trandy-images/mm6.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 8,
      name: "Mohan Maya",
      price: 149,
      image:
        "/trandy-images/mm7.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
  ],

  topRated: [
    {
      id: 9,
      name: "Mohan Maya",
      price: 350,
      image:
        "/trandy-images/mm4.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 10,
      name: "Mohan Maya",
      price: 210,
      image:
        "/trandy-images/mm5.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 11,
      name: "Mohan Maya",
      price: 330,
      image:
        "/trandy-images/mm6.png",
        gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 12,
      name: "Mohan Maya",
      price: 280,
      image:
        "/trandy-images/mm7.png",
        gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
  ],

  tensingItems: [
    {
      id: 13,
      name: "Mohan Maya",
      price: 260,
      image:
        "/trandy-images/mm4.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 14,
      name: "Mohan Maya",
      price: 180,
      image:
        "/trandy-images/mm5.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
      image:
        "/trandy-images/mm5.png",
    },
    {
      id: 15,
      name: "Mohan Maya",
      price: 220,
      image:
        "/trandy-images/mm6.png",
        gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 16,
      name: "Mohan Maya",
      price: 400,
      image:
        "/trandy-images/mm7.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
    },
    {
      id: 17,
      name: "Mohan Maya",
      price: 400,
      image:
        "/trandy-images/mm4.png",
      gallery: [
    "/trandy-images/mm4.png",
    "/trandy-images/mm5.png",
    "/trandy-images/mm6.png",
    "/trandy-images/mm7.png",
  ],
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (productId, productName) => {
    console.log(`Added to cart: ${productName}`);
  };

  const handleQuickView = (product) => {
  setSelectedProduct(product);
};

  const handleAddToWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="py-20 bg-[#ffd8df]">
      <div className="max-w-350 mx-auto  relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-14">
          <div>
            <span className="bg-transparent text-[#ef4462] border border-[#ef4462] px-4 py-2 text-sm font-bold uppercase rounded-full">
              This Month
            </span>

            <h2 className="text-5xl font-bold text-[#ef4462] mt-4">
              Trending Collection
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-12 mt-8 lg:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-2 text-lg cursor-pointer font-medium transition-all ${
                  activeTab === tab.value
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {activeTab === tab.value && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#fe4462] text-white text-xs font-bold px-3 py-1 rounded">
                    {productData[tab.value].length}
                  </span>
                )}

                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-trendy absolute left-[0] top-[55%] -translate-x-1/2 -translate-y-1/2  z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center  border-4 border-[#efefef] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-next-trendy absolute translate-x-1/2 -translate-y-1/2 right-[0] top-[55%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#efefef] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white">
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
                <div className="group relative bg-[#d1aaaa8a] shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-full overflow-hidden">
                  

                  {/* Product Image */}
                  <div className="h-80 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[50%] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Action Icons on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4 items-center">
                      <ActionButton
                        icon={FiShoppingBag}
                        label="Add to Cart"
                        onClick={() => handleAddToCart(item.id, item.name)}
                         className="bg-[#ff7f50] hover:bg-[#ef4462] text-white"
                      />
                      <ActionButton
  icon={FiEye}
  label="Quick View"
  onClick={() => handleQuickView(item)}
   className="bg-[#ff7f50] hover:bg-[#ef4462] text-white"
/>
                      <ActionButton
                        icon={FiHeart}
                        label="Add to List"
                        onClick={() => handleAddToWishlist(item.id)}
                        className={`text-white ${
  wishlist[item.id]
    ? "bg-red-500 hover:bg-[#ff7f50]"
    : "bg-[#ff7f50] hover:bg-[#ef4462]"
}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-6 flex-grow text-center">
                  <h3 className="text-lg font-bold text-[#1d1d1d] line-clamp-2 ">
                    {item.name}
                  </h3>

                  <p className="text-[#ff7f50] text-base font-semibold mt-3">
                    INR {item.price}.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProduct && (
  <ProductPreviewModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)}
      </div>
    </section>
  );
};

export default TrendyCollection;
