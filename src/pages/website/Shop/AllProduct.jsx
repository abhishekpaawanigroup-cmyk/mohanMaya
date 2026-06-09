import React from "react";
import ProductCard from "./Product";
import ProductFilters from "./Filter";

const Products = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters */}
          <div className="w-full lg:w-[300px]">
            <ProductFilters />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;