import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveLink(window.location.pathname);
    };

    setTimeout(() => {}, 10);

    handleLocationChange();
  }, [window.location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-8 hidden md:flex">
          <Link to="/home" className="text-custom-black hover:text-gray-500">
            Home
          </Link>
          <Link to="/reports" className="text-custom-black hover:text-gray-500">
            Reports
          </Link>
          <Link
            to="/pricing"
            className={`text-custom-black hover:text-gray-500 ${
              activeLink === "/pricing"
                ? "text-blue-800"
                : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            }`}
          >
            Pricing
          </Link>
          <Link to="/support" className="text-custom-black hover:text-gray-500">
            Support
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <img src="/logo.png" alt="logo" className="h-16 w-auto" />
        </div>
        <div className="space-x-8 flex items-center">
          <Link
            to="/privacy-policy"
            className="text-custom-black hover:text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-conditions"
            className="text-custom-black hover:text-gray-500"
          >
            Terms & Conditions
          </Link>
          <button
            type="button"
            className="flex text-sm rounded-full md:me-0"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>

            <img
              className="w-12 h-12 rounded-full"
              src={"/Home/profile.png"}
              // src={profilePicture}
              alt="user photo"
            />
          </button>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-32 top-16 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-white dark:divide-gray-600 z-20"
              id="user-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    to="/pricing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-custom-black dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    // onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-custom-black dark:hover:text-white w-full text-left"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
