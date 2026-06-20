import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiEye, FiHeart, FiShoppingBag, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ActionButton from "../../../components/common/ActionButton";
import ProductPreviewModal from "./Productmodal";
import SectionHeading from "../../../components/common/SectionHeading";
import { featuredProducts } from "../../../data/products";
import { useApp } from "../../../context/AppContext";

import "swiper/css";
import "swiper/css/navigation";

const FeaturedProduct = () => {
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-[#f4edee] dark:bg-[#0d0508] pb-20 pt-10">
      <div className="mx-auto px-4 sm:px-8 relative max-w-[1440px]">
        <SectionHeading badge="Top Sale" title="Featured Characters" className="mb-14" />

        {/* Custom Arrows */}
        <button
          className="custom-prev absolute left-0 top-[55%] z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white"
          aria-label="Previous"
        >
          <FiChevronLeft size={26} />
        </button>
        <button
          className="custom-next absolute right-0 top-[55%] z-20 w-14 h-14 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#ef4462] hover:text-white transition-colors hover:border-white"
          aria-label="Next"
        >
          <FiChevronRight size={26} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          spaceBetween={30}
          loop
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {featuredProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col h-full">
                <div className="group relative bg-[#d1aaaa8a] dark:bg-white/5 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-full">
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
                  <h3 className="text-[18px] font-bold text-[#1d1d1d] dark:text-white line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-[#ff7f50] text-[16px] font-semibold mt-3">INR {item.price}.00</p>
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

export default FeaturedProduct;
