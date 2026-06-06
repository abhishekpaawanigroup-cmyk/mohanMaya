import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductPreviewModal from "./Productmodal";
import { Navigation } from "swiper/modules";
import {
  FiEye,
  FiHeart,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import ActionButton from "../../../components/common/ActionButton";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Miniature Cart",
    price: "USD 200.00",
    image:
      "/Featured-images/mm4.png",
    discount: true,
    gallery: [
    "/Featured-images/mm5.png",
    "/Featured-images/mm6.png",
    "/Featured-images/mm7.png",
    "/Featured-images/mm4.png",
  ],
  },
  {
    id: 2,
    name: "Miniature Home",
    price: "USD 49.00",
    image:
      "/Featured-images/mm5.png",
      gallery: [
    "/Featured-images/mm4.png",
    "/Featured-images/mm5.png",
    "/Featured-images/mm6.png",
    "/Featured-images/mm7.png",
  ],
  },
  {
    id: 3,
    name: "Miniature Toy",
    price: "USD 150.00",
    image:
      "/Featured-images/mm6.png",
    discount: true,
    gallery: [
    "/Featured-images/mm4.png",
    "/Featured-images/mm5.png",
    "/Featured-images/mm6.png",
    "/Featured-images/mm7.png",
  ],
  },
  {
    id: 4,
    name: "Mini Tree-House",
    price: "USD 150.00",
    image:
      "/Featured-images/mm7.png",
      gallery: [
    "/Featured-images/mm4.png",
    "/Featured-images/mm5.png",
    "/Featured-images/mm6.png",
    "/Featured-images/mm7.png",
  ],
  },
  {
    id: 5,
    name: "Miniature Toy",
    price: "USD 180.00",
    image:
      "/Featured-images/mm6.png",
      gallery: [
    "/Featured-images/mm4.png",
    "/Featured-images/mm5.png",
    "/Featured-images/mm6.png",
    "/Featured-images/mm7.png",
  ],
  },
];
const FeaturedProduct = () => {
  const [wishlist, setWishlist] = useState({});
 const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (productId, productName) => {
    console.log(`Added to cart: ${productName}`);
    // Add your add to cart logic here
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
    <section className="bg-gradient-to-r from-[#d7c842] to-[#0f83df] py-20">
      <div className="mx-auto px-8 relative max-w-360">
        <div className="text-center mb-14">
            <span className="bg-transparent text-[#ab20ae] border border-[#ab20ae] px-4 py-2 text-sm font-medium uppercase">
              Top Sale
            </span>

            <h2 className="text-5xl font-bold text-[#7a037cd6] mt-4">
              Featured Products
            </h2>
          </div>
        {/* Custom Arrows */}
        <button className="custom-prev absolute left-0 top-[48%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center  border-4 border-[#f4f4f4] hover:bg-[#ceb60b] hover:text-white transition-colors hover:border-white">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-next absolute right-0 top-[48%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#1b5fa2] hover:text-white transition-colors hover:border-white">
          <FiChevronRight size={26} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={30}
          loop={true}
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
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col h-full">
                {/* Product Card */}
                <div className="group relative bg-transparent overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-full">
                  {/* Discount Badge */}
                  {item.discount && (
                    <span className="absolute top-[15px] left-[15px] z-10 bg-transparent text-[#ff7f50] border border-[#ff7f50] px-[10px] py-2 rounded-full text-[14px] font-semibold">
                      10% Off
                    </span>
                  )}

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
                      />
                      <ActionButton
  icon={FiEye}
  label="Quick View"
  onClick={() => handleQuickView(item)}
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
                <div className="mt-6 grow text-center">
                  <h3 className="text-[18px] font-bold text-[#1d1d1d] line-clamp-2 ">
                    {item.name}
                  </h3>

                  <div className="flex gap-1 text-[#ff7f50] text-sm mt-2 justify-center">
                    ★★★★★
                  </div>

                  <p className="text-[#ff7f50] text-[16px] font-semibold mt-3">
                    {item.price}
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

export default FeaturedProduct;
