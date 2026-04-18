import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-semibold tracking-tight">
          VibeStore
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/shop" className="hover:text-indigo-500 transition">
            Shop
          </Link>

          <Link to="/cart" className="hover:text-indigo-500 transition">
            Cart
          </Link>

          {user ? (
            <>
              <span className="text-gray-500">{user.name}</span>

              <Link to="/admin" className="font-medium hover:text-indigo-500">
                Admin
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="hover:text-indigo-500">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;