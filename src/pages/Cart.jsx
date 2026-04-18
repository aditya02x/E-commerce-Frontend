import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Your Cart
        </h1>
        <p className="text-gray-500 mt-1">
          Review your selected items before checkout
        </p>
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl">
          <h2 className="text-xl font-medium text-gray-700">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Start shopping to add items here
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Go to Shop
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 items-center border border-gray-100 rounded-2xl p-4 hover:shadow-sm transition"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ₹{item.price}
                  </p>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() =>
                        updateQty(item._id, "dec")
                      }
                      className="w-8 h-8 rounded-full border hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQty(item._id, "inc")
                      }
                      className="w-8 h-8 rounded-full border hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="text-right">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* SUMMARY CARD */}
          <div className="border border-gray-100 rounded-2xl p-6 h-fit sticky top-24">

            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-black text-white py-3 rounded-full hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;