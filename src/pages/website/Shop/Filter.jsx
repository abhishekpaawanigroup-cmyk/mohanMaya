import React from "react";

const ProductFilters = () => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#fe4462] mb-3">
          Category
        </h3>

        <div className="space-y-3">
          {[
            "All Products",
            "Festival Collection",
            "Wedding Collection",
            "Birthday Collection",
            "Seasonal Collection",
            "Limited Edition",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#fe4462]"
              />
              <span className="text-sm text-gray-700">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* Occasion */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#fe4462] mb-3">
          Occasion
        </h3>

        <div className="space-y-3">
          {[
            "Diwali",
            "Holi",
            "Christmas",
            "New Year",
            "Anniversary",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#fe4462]"
              />
              <span className="text-sm text-gray-700">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#fe4462] mb-3">
          Price Range
        </h3>

        <div className="space-y-3">
          {[
            "Under ₹499",
            "₹500 - ₹999",
            "₹1000 - ₹1999",
            "₹2000+",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="price"
                className="h-4 w-4 accent-[#fe4462]"
              />
              <span className="text-sm text-gray-700">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#fe4462] mb-3">
          Availability
        </h3>

        <div className="space-y-3">
          {["In Stock", "Pre Order", "Coming Soon"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#fe4462]"
              />
              <span className="text-sm text-gray-700">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* Sort */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#fe4462] mb-3">
          Sort By
        </h3>

        <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#fe4462]">
          <option>Featured</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Best Selling</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button className="w-full py-3 rounded-xl bg-[#fe4462] border border-[#fe4462] text-white font-medium hover:border-[#fe4462] hover:text-[#fe4462] hover:bg-transparent transition-all duartion-300 cursor-pointer">
          Apply Filters
        </button>

        <button className="w-full py-3 rounded-xl border border-[#fe4462] bg-transparent text-[#fe4462] hover:bg-[#fe4462] hover:text-[#fff] transition-all duration-300 cursor-pointer font-medium">
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductFilters;