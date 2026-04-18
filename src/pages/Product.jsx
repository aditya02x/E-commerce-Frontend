import { useParams } from "react-router-dom";

const dummyProducts = [
  {
    _id: "1",
    name: "Minimal Watch",
    price: 1999,
    category: "Accessories",
    description:
      "A clean and minimal watch designed for everyday elegance. Crafted with precision and style.",
    image: "https://picsum.photos/500/500?1",
  },
  {
    _id: "2",
    name: "Premium Shoes",
    price: 4999,
    category: "Footwear",
    description:
      "Comfort meets luxury. These premium shoes are built for performance and style.",
    image: "https://picsum.photos/500/500?2",
  },
];

const Product = () => {
  const { id } = useParams();

  const product = dummyProducts.find((p) => p._id === id);

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* IMAGE */}
      <div className="w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        <p className="text-gray-500 mt-2">{product.category}</p>

        <p className="text-2xl font-bold mt-4">₹{product.price}</p>

        <p className="text-gray-500 mt-6 leading-relaxed">
          {product.description}
        </p>

        {/* ACTION */}
        <div className="flex gap-4 mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Add to Cart
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;