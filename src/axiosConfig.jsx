import axios from "axios";

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: "http://localhost:9090/api", // Base API URL
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true, // Enables sending cookies (JSESSIONID)
});

export default api;
