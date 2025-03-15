import axios from "axios";

// Get access token from localStorage
const accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
    baseURL: "http://localhost:9090",
    headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
});

export default axiosInstance;
