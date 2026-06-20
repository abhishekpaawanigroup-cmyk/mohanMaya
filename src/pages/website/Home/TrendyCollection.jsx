import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiHeart, FiEye, FiShoppingBag, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ActionButton from "../../../components/common/ActionButton";
import ProductPreviewModal from "./Productmodal";
import { trendyData, trendyTabs } from "../../../data/products";
import { useApp } from "../../../context/AppContext";

import "swiper/css";
import "swiper/css/navigation";

const TrendyCollection = () => {
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const items = trendyData[activeTab] || [];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f4edee] dark:bg-[#0d0508]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-14">
          <div>
            <span className="bg-transparent text-[#ef4462] border border-[#ef4462] px-4 py-1 text-sm font-bold uppercase rounded-full">
              This Month
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ef4462] mt-4">
              Trending Collection
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-10 mt-4 lg:mt-0">
            {trendyTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-2 text-sm sm:text-base lg:text-lg cursor-pointer font-medium transition-all ${
                  activeTab === tab.value
                    ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                    : "text-gray-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {activeTab === tab.value && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#fe4462] text-white text-xs font-bold px-3 py-1 rounded">
                    {trendyData[tab.value].length}
                  </span>
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Navigation */}
        <button
          className="custom-prev-trendy absolute left-0 sm:left-3 lg:left-0 top-[55%] lg:top-[50%] z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-2 lg:border-4 border-[#efefef] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white"
          aria-label="Previous"
        >
          <FiChevronLeft size={26} />
        </button>
        <button
          className="custom-next-trendy absolute right-0 sm:right-3 lg:right-0 top-[55%] lg:top-[50%] z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-2 lg:border-4 border-[#efefef] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white"
          aria-label="Next"
        >
          <FiChevronRight size={26} />
        </button>

        {/* Slider - keyed on tab so it re-inits cleanly when data changes */}
        <Swiper
          key={activeTab}
          modules={[Navigation, Autoplay]}
          navigation={{ prevEl: ".custom-prev-trendy", nextEl: ".custom-next-trendy" }}
          loop={items.length > 4}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1400: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col h-full">
                <div className="group relative bg-[#d1aaaa8a] dark:bg-white/5 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-full overflow-hidden">
                  <div className="h-80 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-[50%] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4 items-center">
                      <ActionButton
                        icon={FiShoppingBag}
                        label="Add to Cart"
                        onClick={() => addToCart(item)}
                        className="bg-[#ff7f50] hover:bg-[#ef4462] text-white"
                      />
                      <ActionButton
                        icon={FiEye}
                        label="Quick View"
                        onClick={() => setSelectedProduct(item)}
                        className="bg-[#ff7f50] hover:bg-[#ef4462] text-white"
                      />
                      <ActionButton
                        icon={FiHeart}
                        label="Add to Wishlist"
                        onClick={() => toggleWishlist(item)}
                        className={`text-white ${
                          isWishlisted(item.id)
                            ? "bg-red-500 hover:bg-[#ff7f50]"
                            : "bg-[#ff7f50] hover:bg-[#ef4462]"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grow text-center">
                  <h3 className="text-lg font-bold text-[#1d1d1d] dark:text-white line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-[#ff7f50] text-base font-semibold mt-3">INR {item.price}.00</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProduct && (
          <ProductPreviewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </section>
  );
};

export default TrendyCollection;
