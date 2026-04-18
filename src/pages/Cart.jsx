import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      _id: 1,
      name: "Minimal Watch",
      price: 1999,
      quantity: 1,
      image: "https://picsum.photos/200/200?1",
    },
    {
      _id: 2,
      name: "Premium Shoes",
      price: 4999,
      quantity: 2,
      image: "https://picsum.photos/200/200?2",
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  // Total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-500">
        Your cart is empty
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-10">
      
      {/* CART ITEMS */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold">Your Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border border-gray-200 p-4 rounded-xl"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">
                ₹{item.price}
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="px-2 border rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item._id)}
                  className="px-2 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeItem(item._id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border border-gray-200 p-6 rounded-xl h-fit">
        <h2 className="text-lg font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between text-gray-500 mb-2">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between text-gray-500 mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;