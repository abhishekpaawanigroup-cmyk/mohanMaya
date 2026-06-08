import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const ProductPreviewModal = ({ product, onClose }) => {
   const [selectedImage, setSelectedImage] = useState(
    product.gallery?.[0] || product.image
  );

  const images = product.gallery || [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl w-full max-w-4xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#fe4462] transition duration-200"
        >
          <FiX size={22} />
        </button>

        <div className="p-8">
          
          {/* Main Image */}
          <div className="bg-[#ffd3d3] rounded-xl h-[500px] flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-[400px] object-contain transition-all duration-500 hover:scale-110"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex justify-center gap-4 mt-6">
            {images.map((img, index) => (
              <div
                key={index}
                onMouseEnter={() => setSelectedImage(img)}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 bg-[#f5f5f5] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === img
                    ? "border-[#ff7f50]"
                    : "border-transparent hover:border-[#ff7f50]"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>

          {/* Product Name */}
          <h3 className="text-center text-3xl font-bold mt-8">
            {product.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;