import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX, FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import { useApp } from "../../../context/AppContext";

const ProductPreviewModal = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useApp();
  const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] || product.image);

  const images = product.gallery || [product.image];

  // Lock body scroll while the modal is open + close on Escape.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-[#1a0a0e] rounded-xl w-full max-w-4xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#fe4462] transition duration-200"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Images */}
          <div>
            <div className="bg-[#ffd3d3] dark:bg-white/5 rounded-xl h-[340px] flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="max-h-[300px] object-contain transition-all duration-500 hover:scale-110"
              />
            </div>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              {images.map((img, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setSelectedImage(img)}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 bg-[#f5f5f5] dark:bg-white/10 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    selectedImage === img ? "border-[#ff7f50]" : "border-transparent hover:border-[#ff7f50]"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {product.category && (
              <span className="text-xs uppercase tracking-wide text-gray-400">{product.category}</span>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold mt-1 dark:text-white">{product.name}</h3>

            {product.rating && (
              <div className="flex items-center gap-1 mt-3 text-[#ff7f50]">
                <FiStar className="fill-current" size={16} />
                <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating} rating</span>
              </div>
            )}

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-[#fe4462]">₹{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">₹{product.oldPrice}</span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4 text-sm">
              A handcrafted miniature created with meticulous attention to detail. Each piece is
              individually painted and finished, making it a unique collectible.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="btn-primary flex-1 justify-center"
              >
                <FiShoppingBag size={18} /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className="btn-outline justify-center"
              >
                <FiHeart
                  size={18}
                  className={isWishlisted(product.id) ? "fill-[#fe4462]" : ""}
                />
                {isWishlisted(product.id) ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPreviewModal;
