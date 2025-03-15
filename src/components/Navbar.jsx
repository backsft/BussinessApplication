import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo (redirects to Home) */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition duration-300">
          CodingZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* Corrected Home Link */}
          <Link to="/" className="relative group transition duration-300 hover:text-blue-600">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          {/* Other Pages */}
          {["Services", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative group transition duration-300 hover:text-blue-600"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden bg-white shadow-md absolute w-full left-0 top-16 flex flex-col items-center py-4 space-y-4 transition-transform duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        {/* Corrected Home Link */}
        <Link 
          to="/" 
          className="text-gray-700 hover:text-blue-600 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        {/* Other Pages */}
        {["Services", "About", "Contact"].map((item, index) => (
          <Link 
            key={index} 
            to={`/${item.toLowerCase()}`} 
            className="text-gray-700 hover:text-blue-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        <Link to="/login" onClick={() => setIsOpen(false)}>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
