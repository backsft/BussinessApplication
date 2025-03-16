import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("userEmail"); // Retrieve email dynamically

      if (!token || !email) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(`http://localhost:9090/api/userInformation?email=${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Failed to fetch user info", err);
        navigate("/login");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail"); // Clear stored email
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      {user ? (
        <div className="mt-6 bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
          {user.profilePicturePath && (
            // <img
            //   src={`http://localhost:9090${user.profilePicturePath}`} // Ensure correct path
            //   alt="Profile"
            //   className="w-24 h-24 rounded-full mx-auto mb-4"
            // />
            <img
  src={user.profilePicturePath} // Now it contains full URL
  alt="Profile"
  className="w-24 h-24 rounded-full mx-auto mb-4"
/>

          )}
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Role: {user.role}</p>
          <p className="text-gray-700">Car Model: {user.carModel}</p>
          <p className="text-gray-700">
            Driving License: {user.drivingLicenseNumber} (Exp: {user.drivingLicenseExpiryDate})
          </p>
          <button onClick={handleLogout} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md">
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default Dashboard;
