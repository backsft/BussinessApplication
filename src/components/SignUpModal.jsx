import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig"; // Import Axios config
import moment from "moment"; // Install via: npm install moment

function SignUpModal({ isModalOpen, setIsModalOpen }) {
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER",
    drivingLicenseNumber: "",
    drivingLicenseExpiryDate: "",
    carModel: "",
    profilePicture: null,
  });

  // State for error messages
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null); // Clear previous errors

  //   try {
  //     const formDataToSend = new FormData();
      
  //     // Convert date format to DD-MM-YYYY
  //     const formattedDate = moment(formData.drivingLicenseExpiryDate, "YYYY-MM-DD").format("DD-MM-YYYY");

  //     // Append form data
  //     Object.keys(formData).forEach((key) => {
  //       if (key === "drivingLicenseExpiryDate") {
  //         formDataToSend.append(key, formattedDate);
  //       } else {
  //         formDataToSend.append(key, formData[key]);
  //       }
  //     });

  //     // Make API request using axios config
  //     await api.post("/signup", formDataToSend);

  //     // If successful, redirect to "/"
  //     setIsModalOpen(false);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "An error occurred during signup.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "drivingLicenseExpiryDate" && formData[key]) {
          // Convert yyyy-MM-dd to dd-MM-yyyy
          const [year, month, day] = formData[key].split("-");
          formDataToSend.append(key, `${day}-${month}-${year}`);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      // Make API request
      await api.post("/signup", formDataToSend);
  
      // If successful, redirect to home
      setIsModalOpen(false);
      navigate("/");
    } catch (err) {
      console.error("Signup Error:", err.response?.data); // Log full response for debugging
  
      // Extract proper error message from API response
      let errorMessage = "Something went wrong. Please try again.";
  
      if (err.response) {
        if (err.response.data && typeof err.response.data === "object") {
          errorMessage = JSON.stringify(err.response.data, null, 2); // Convert error object to string
        } else if (err.response.data && typeof err.response.data === "string") {
          errorMessage = err.response.data; // Direct error message
        }
      }
  
      setError(errorMessage); // Display exact API error message
    }
  };
  

  if (!isModalOpen) return null; // Prevents rendering when modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Create an Account</h2>

        {/* Show error message if any */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Driving License Number */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Driving License Number</label>
            <input
              type="text"
              name="drivingLicenseNumber"
              placeholder="Enter your license number"
              value={formData.drivingLicenseNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Driving License Expiry Date */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">License Expiry Date</label>
            <input
              type="date"
              name="drivingLicenseExpiryDate"
              value={formData.drivingLicenseExpiryDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Car Model */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Car Model</label>
            <input
              type="text"
              name="carModel"
              placeholder="Enter your car model"
              value={formData.carModel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profile Picture */}
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-1/2 mr-2"
            >
              Register
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-1/2 ml-2"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
