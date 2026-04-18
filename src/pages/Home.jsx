import ProductGrid from "../components/product/ProductGrid";
import { useNavigate } from "react-router-dom";

const dummyProducts = [
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center py-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Elevate Your Style With Premium Products
        </h1>

        <p className="mt-6 text-gray-500 max-w-md">
          Discover modern, minimal and high-quality products crafted for everyday lifestyle.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Shop Now
        </button>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <button
            onClick={() => navigate("/shop")}
            className="text-sm text-gray-500 hover:text-black transition"
          >
            View All →
          </button>
        </div>

        <ProductGrid products={dummyProducts} />
      </section>
    </div>
  );
};

export default Home;