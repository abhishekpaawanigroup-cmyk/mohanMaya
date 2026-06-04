import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    name: "Leather Chair",
    price: "USD 200.00",
    image:
      "https://preview.colorlib.com/theme/furn/assets/img/gallery/popular-imtes1.png",
    discount: true,
  },
  {
    id: 2,
    name: "Chair Pillow",
    price: "USD 49.00",
    image:
      "https://preview.colorlib.com/theme/furn/assets/img/gallery/popular-imtes2.png",
  },
  {
    id: 3,
    name: "Alexander Roll Arm Sofa",
    price: "USD 150.00",
    image:
      "https://preview.colorlib.com/theme/furn/assets/img/gallery/popular-imtes3.png",
    discount: true,
  },
  {
    id: 4,
    name: "Brasslegged Armchair",
    price: "USD 150.00",
    image:
      "https://preview.colorlib.com/theme/furn/assets/img/gallery/popular-imtes4.png",
  },
  {
    id: 5,
    name: "Modern Chair",
    price: "USD 180.00",
    image:
      "https://preview.colorlib.com/theme/furn/assets/img/gallery/popular-imtes1.png",
  },
];
const FeaturedProduct = () => {
  const [wishlist, setWishlist] = useState({});

  const handleAddToCart = (productId, productName) => {
    console.log(`Added to cart: ${productName}`);
    // Add your add to cart logic here
  };

  const handleQuickView = (productId) => {
    console.log(`Quick view: ${productId}`);
    // Add your quick view logic here
  };

  const handleAddToWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="mx-auto px-8 relative max-w-360">
        {/* Custom Arrows */}
        <button className="custom-prev absolute left-0 top-[35%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center  border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
          <FiChevronLeft size={26} />
        </button>

        <button className="custom-next absolute right-0 top-[35%] z-20 w-15 h-15 bg-[#f4f4f4] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] hover:bg-[#b18b5e] hover:text-white transition-colors hover:border-white">
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
                <div className="group relative bg-[#efede4] overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Discount Badge */}
                  {item.discount && (
                    <span className="absolute top-6 left-6 z-10 bg-[#c1965e] text-white px-4 py-2 rounded-full text-lg font-semibold">
                      10% Off
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="h-62.5 flex items-center justify-center overflow-hidden">
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
                <div className="mt-6 grow">
                  <h3 className="text-[18px] font-bold text-[#1d1d1d] line-clamp-2 hover:text-[#c1965e] transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex gap-1 text-[#c1965e] text-sm mt-2">
                    ★★★★★
                  </div>

                  <p className="text-[#c1965e] text-[16px] font-semibold mt-3">
                    {item.price}
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

export default FeaturedProduct;
