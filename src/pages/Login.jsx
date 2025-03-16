import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError(""); // Clear previous errors

  //   try {
  //     const response = await fetch("http://localhost:9090/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       localStorage.setItem("token", data.accessToken); // Save token
  //       navigate("/dashboard"); // Redirect to Dashboard
  //     } else {
  //       const errorData = await response.json();
  //       setError(errorData.message || "Invalid credentials");
  //     }
  //   } catch (err) {
  //     setError("Something went wrong. Please try again.");
  //   }
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:9090/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.accessToken); // Save token
        localStorage.setItem("userEmail", email); // Save email dynamically
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      console.error("Error during login", err);
    }
  };
  

  return (
    <div className="container mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="mt-6 max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
