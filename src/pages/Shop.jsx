import { useState } from "react";
import ProductGrid from "../components/product/ProductGrid";

const allProducts = [
  {
    _id: 1,
    name: "Minimal Watch",
    price: 1999,
    category: "Accessories",
    image: "https://picsum.photos/400/400?1",
  },
  {
    _id: 2,
    name: "Premium Shoes",
    price: 4999,
    category: "Footwear",
    image: "https://picsum.photos/400/400?2",
  },
  {
    _id: 3,
    name: "Modern Hoodie",
    price: 2999,
    category: "Clothing",
    image: "https://picsum.photos/400/400?3",
  },
  {
    _id: 4,
    name: "Leather Bag",
    price: 6999,
    category: "Bags",
    image: "https://picsum.photos/400/400?4",
  },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          Shop Collection
        </h1>
        <p className="text-gray-500 mt-2">
          Discover premium products crafted for modern lifestyle
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">

        {/* SEARCH */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex gap-2 flex-wrap">

          {["All", "Accessories", "Footwear", "Clothing", "Bags"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  category === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-200 hover:border-black"
                }`}
              >
                {cat}
              </button>
            )
          )}

        </div>
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No products found
          </p>
        </div>
      )}

    </div>
  );
};

export default Shop;