import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { createOrder } from "../services/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        orderItems: cart.map((item) => ({
          name: item.name,
          qty: item.quantity,
          price: item.price,
          image: item.image,
          productId: item._id,
        })),
        shippingAddress: form,
        totalPrice,
      };

      await createOrder(orderData);

      clearCart();
      setPlaced(true);
    } catch (error) {
      alert("Order failed");
    } finally {
      setLoading(false);
    }
  };

  if (placed) {
    return (
      <div className="text-center py-24">
        <h1 className="text-3xl font-semibold">Order Placed 🎉</h1>
        <p className="text-gray-500 mt-4">
          Your order has been successfully created.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-6 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Checkout</h2>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={form.zip}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {/* SUMMARY */}
      <div className="border border-gray-200 p-6 rounded-xl h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm text-gray-600"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;