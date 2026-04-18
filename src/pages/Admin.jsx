import { useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Minimal Watch",
      price: 1999,
      category: "Accessories",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      alert("Fill all fields");
      return;
    }

    const newProduct = {
      _id: Date.now(),
      ...form,
    };

    setProducts((prev) => [...prev, newProduct]);

    setForm({ name: "", price: "", category: "" });
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* ADD PRODUCT */}
      <form
        onSubmit={addProduct}
        className="border border-gray-200 p-6 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Add Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
          Add Product
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="border border-gray-200 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          All Products
        </h2>

        <div className="space-y-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{p.price} • {p.category}
                </p>
              </div>

              <button
                onClick={() => deleteProduct(p._id)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;