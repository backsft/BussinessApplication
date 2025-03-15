import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo (redirects to Home) */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CodingZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>          
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-0.3 rounded-md hover:bg-blue-700">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
