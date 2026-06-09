import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import ProductModal from "./ProductModal";

const ProductCard = () => {
  const [wishlist, setWishlist] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div
  onClick={() => setOpenModal(true)}
  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
>
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        
        <img
          src="/bestseller-image/mm5.png"
          alt="Mohan-Maya"
          className="w-full h-[200px] object-contain group-hover:scale-105 transition duration-500"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-[#fe4462] text-white text-xs font-semibold px-3 py-1 rounded-full">
          25% OFF
        </span>

        {/* Wishlist */}
        <button
  onClick={(e) => {
    e.stopPropagation();
    setWishlist(!wishlist);
  }}
  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
>
          <Heart
            size={20}
            className={`transition ${
              wishlist
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Mohan-Maya
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Handcrafted Miniature Collection
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-xl font-bold text-[#fe4462]">
            ₹999
          </span>

          <span className="text-gray-400 line-through">
            ₹1299
          </span>

          <span className="text-green-600 text-sm font-medium">
            Save ₹300
          </span>
        </div>

        {/* Add To Cart */}
        <button
  onClick={(e) => {
    e.stopPropagation();
    // Add to cart logic
  }}
  className="mt-5 w-full flex items-center justify-center gap-2 bg-[#fe4462] hover:bg-[#e53a58] text-white py-3 rounded-xl font-medium transition"
>
  <ShoppingCart size={18} />
  Add To Cart
</button>
      </div>
    </div>

    {openModal && (
    <ProductModal
      onClose={() => setOpenModal(false)}
    />
  )}
  </>
  );
};

export default ProductCard;