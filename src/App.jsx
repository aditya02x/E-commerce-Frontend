import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminOrders from "./pages/AdminOrders";

// Auth
import { useAuth } from "./context/AuthContext";

// 🔐 Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route
  path="/admin/orders"
  element={
    <ProtectedRoute>
      <AdminOrders />
    </ProtectedRoute>
  }
/>
          

          {/* PROTECTED ROUTE */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;