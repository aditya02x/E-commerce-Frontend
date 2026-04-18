import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// attach token
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

// AUTH
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// PRODUCTS
export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

export const createProduct = async (data) => {
  const res = await API.post("/products", data);
  return res.data;
};
export const createOrder = async (data) => {
  const res = await API.post("/orders", data);
  return res.data;
};

export default API;