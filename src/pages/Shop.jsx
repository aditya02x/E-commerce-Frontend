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

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Shop</h1>
        <p className="text-gray-500 mt-2">
          Explore all premium products
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 px-4 py-2 rounded-lg w-full md:w-1/3 outline-none focus:ring-2 focus:ring-black"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        >
          <option>All</option>
          <option>Accessories</option>
          <option>Footwear</option>
          <option>Clothing</option>
          <option>Bags</option>
        </select>
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="text-gray-500 text-center mt-20">
          No products found
        </p>
      )}
    </div>
  );
};

export default Shop;