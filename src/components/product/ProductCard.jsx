import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="cursor-pointer group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
    >
      <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="bg-white px-4 py-2 rounded-lg text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>

        <div className="flex justify-between mt-3">
          <span className="font-semibold">₹{product.price}</span>
          <span className="text-xs text-gray-400">View →</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;