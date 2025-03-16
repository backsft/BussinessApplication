import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import SignUpModal from "./SignUpModal"; // Import the modal component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false); // Sign-up modal state

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CodingZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {/* Login & Sign Up */}
          <div className="space-x-3">
            <Link to="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
            </Link>
            <button 
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile View: Login & Sign Up Buttons */}
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </Link>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Render SignUpModal Component */}
      <SignUpModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
}

export default Navbar;
