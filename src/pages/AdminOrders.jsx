import { useEffect, useState } from "react";
import { getAllOrders } from "../services/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        All Orders
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-200 p-4 rounded-xl"
          >
            {/* USER INFO */}
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium">
                  {order.user?.name}
                </p>
                <p className="text-sm text-gray-500">
                  {order.user?.email}
                </p>
              </div>

              <p className="font-semibold">
                ₹{order.totalPrice}
              </p>
            </div>

            {/* ITEMS */}
            <div className="text-sm text-gray-600 space-y-1">
              {order.orderItems.map((item, idx) => (
                <div key={idx}>
                  {item.name} × {item.qty}
                </div>
              ))}
            </div>

            {/* ADDRESS */}
            <p className="text-xs text-gray-400 mt-2">
              {order.shippingAddress.address},{" "}
              {order.shippingAddress.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;