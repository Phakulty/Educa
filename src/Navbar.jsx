import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
      console.log(error);
    }
  };

  return (
    <header className="bg-[#ddd] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1>
          <NavLink to="/" className="text-2xl font-bold text-[#275d60]">
            EduCA.
          </NavLink>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-[#275d60] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-0 left-0 w-64 h-full bg-[#ddd] z-50 transform transition-transform duration-300 ease-in-out md:static md:w-auto md:translate-x-0 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 p-6 md:p-2">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#275d60] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#275d60] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink
                    to="/categories"
                    className="hover:text-[#275d60] py-2 md:py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="hover:text-[#275d60] py-2 md:py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/logout"
                    onClick={handleLogout}
                    className="bg-[#275d60] text-white px-4 py-2 rounded-md duration-500 hover:bg-[#f8fafc] hover:text-[#275d60] md:py-2"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signup"
                    className="bg-[#275d60] text-white px-4 py-2 rounded-md duration-500 hover:bg-[#f8fafc] hover:text-[#275d60] md:py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="bg-[#275d60] text-white px-4 py-2 rounded-md duration-500 hover:bg-[#f8fafc] hover:text-[#275d60] md:py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


