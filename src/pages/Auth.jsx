import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || (!isLogin && !form.name)) {
      alert("Please fill all required fields");
      return;
    }

    if (isLogin) {
      console.log("Login Data:", form);
    } else {
      console.log("Signup Data:", form);
    }

    // Later: connect backend (JWT)
  };

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-full max-w-md border border-gray-200 p-6 rounded-xl">
        
        {/* HEADER */}
        <h1 className="text-2xl font-semibold text-center">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-gray-500 text-center mt-2 text-sm">
          {isLogin
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* TOGGLE */}
        <p className="text-sm text-center text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-black font-medium"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;