import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    // simulate order
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="text-center py-24">
        <h1 className="text-3xl font-semibold">Order Placed 🎉</h1>
        <p className="text-gray-500 mt-4">
          Thank you for your purchase. This is a demo checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 border border-gray-200 p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-2">
          Shipping Details
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={form.zip}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition mt-4">
          Place Order
        </button>
      </form>

      {/* ORDER SUMMARY */}
      <div className="border border-gray-200 p-6 rounded-xl h-fit">
        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between text-gray-500 mb-2">
          <span>Items</span>
          <span>₹6999</span>
        </div>

        <div className="flex justify-between text-gray-500 mb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Total</span>
          <span>₹6999</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;