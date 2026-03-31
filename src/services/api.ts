import axios from "axios";

const baseURL = "/data/infos.json"; // coloque em public/data/infos.json

const api = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export { baseURL };
export default api;