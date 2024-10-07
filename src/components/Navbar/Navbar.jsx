import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ isTransparent, setIsTransparent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);
  const dashboardDropdownRef = useRef(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveLink(window.location.pathname);
      activeLink === "/home" ? setIsTransparent(true) : setIsTransparent(false);
    };

    handleLocationChange();
  }, [window.location.pathname, activeLink, isTransparent]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        dashboardDropdownRef.current &&
        !dashboardDropdownRef.current.contains(event.target)
      ) {
        setDashboardDropdown(false);
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
  const toggleDashboardDropdown = () => {
    setDashboardDropdown((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={` z-50  ${
        isTransparent ? "absolute" : "relative"
      }  top-0 left-0 w-full z-50 bg-transparent`}
    >
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">
        <button className="lg:hidden text-gray-900" onClick={toggleMobileMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="space-x-16 hidden lg:flex">
          <Link
            to="/home"
            className={`${
              isTransparent && activeLink !== "/home"
                ? "text-white"
                : "text-custom-black"
            } hover:text-gray-500 ${
              activeLink === "/home"
                ? "text-custom-blue"
                : "text-custom-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            }`}
          >
            Home
          </Link>
          <button
            className={`flex items-center ${
              isTransparent ? "text-white" : "text-custom-black"
            } hover:text-gray-500`}
            id="dashboard-menu-button"
            aria-expanded={dashboardDropdown}
            onClick={toggleDashboardDropdown}
          >
            {activeLink === "/home" ? "Dashboard" : "Reports"}
            <IoIosArrowDown className="ml-2" />
          </button>

          <Link
            to="/pricing"
            className={`${
              isTransparent ? "text-white" : "text-custom-black"
            } hover:text-gray-500 ${
              activeLink === "/pricing"
                ? "text-custom-blue"
                : "text-custom-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className={`${
              isTransparent ? "text-white" : "text-custom-black"
            } hover:text-gray-500`}
          >
            Support
          </Link>
        </div>

        <Link to={"/"}>
          <div className="text-2xl font-bold">
            <img
              src={isTransparent ? "/landingLogo.png" : "/logo.png"}
              alt="logo"
              className="h-20 w-auto object-contain rounded"
            />
          </div>
        </Link>

        <div className="space-x-8 hidden lg:flex items-center">
          <Link
            to="/privacyPolicy"
            className={`${
              isTransparent ? "text-white" : "text-custom-black"
            } hover:text-gray-500 ${
              activeLink === "/privacyPolicy"
                ? "text-custom-blue"
                : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            }`}
          >
            {activeLink === "/home" ? "Use Cases" : "Privacy Policy"}
          </Link>
          <Link
            to="/terms&conditions"
            className={`${
              isTransparent ? "text-white" : "text-custom-black"
            } hover:text-gray-500 ${
              activeLink === "/terms&conditions"
                ? "text-custom-blue"
                : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            }`}
          >
            {activeLink === "/home" ? "More" : " Terms & Conditions"}
          </Link>
        </div>

        <div className="flex items-center">
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
              alt="user photo"
            />
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-6 md:right-32 top-16 mt-2 w-36 md:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-xl z-20"
              id="user-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    to="/pricing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    // onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}

          {dashboardDropdown && (
            <div
              ref={dashboardDropdownRef}
              className="absolute left-44 md:right-32 top-16 mt-2 w-36 md:w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-xl z-20"
              id="dashboard-dropdown"
            >
              <ul className="py-2" aria-labelledby="dashboard-menu-button">
                <li>
                  <Link
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    to="/pricing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <button
                    // onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Create New Reports
                  </button>
                </li>
                <li>
                  <button
                    // onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    My Reports
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
          <div className="fixed top-0 left-0 w-64 bg-white h-full z-50 p-4">
            <button className="text-gray-900" onClick={toggleMobileMenu}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="mt-4">
              <Link
                to="/home"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/reports"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                {activeLink === "/home" ? "Dashboard" : "Reports"}
              </Link>
              <Link
                to="/pricing"
                className={`block px-4 py-2 ${
                  activeLink === "/pricing"
                    ? "text-custom-blue"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                onClick={toggleMobileMenu}
              >
                Pricing
              </Link>
              <Link
                to="/support"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                Support
              </Link>
              <Link
                to="/privacyPolicy"
                className={`block px-4 py-2 ${
                  activeLink === "/privacyPolicy"
                    ? "text-custom-blue"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                onClick={toggleMobileMenu}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms&conditions"
                className={`block px-4 py-2 ${
                  activeLink === "/terms&conditions"
                    ? "text-custom-blue"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                onClick={toggleMobileMenu}
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
