import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Import Dashboard Page

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="font-sans bg-gray-100">
      {/* Hide Navbar if user is on Dashboard */}
      {location.pathname !== "/dashboard" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
      </Routes>

      {/* Hide Footer if user is on Dashboard */}
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
}

export default App;
