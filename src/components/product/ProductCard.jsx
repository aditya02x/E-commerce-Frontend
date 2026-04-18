import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition"
        >
          Add to Cart
        </button>
      </div>

      {/* CONTENT */}
      <div
        onClick={() => navigate(`/product/${product._id}`)}
        className="p-4 cursor-pointer"
      >
        <h3 className="font-medium text-lg">{product.name}</h3>

        <p className="text-gray-500 text-sm mt-1">
          {product.category}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-black">
            ₹{product.price}
          </span>

          <span className="text-xs text-gray-400">
            View details →
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;