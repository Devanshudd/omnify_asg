import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaClipboardList,
  FaUserFriends,
  FaBars,
  FaChevronLeft,
  FaUserCircle,
  FaMapMarkerAlt,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1068); // Adjust threshold as needed
    };

    handleResize(); // Set initial collapsed state based on window width
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  useEffect(() => {
    // Collapse the sidebar automatically when window size is smaller than a certain threshold
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  }, []);

  return (
    <div
      className={`h-full shadow-md p-4 ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300 bg-gray-100 flex flex-col justify-between ${
        isCollapsed ? "sticky top-0" : ""
      }`}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1
            className={`text-xl font-bold ${isCollapsed ? "hidden" : "block"}`}
          >
            Front-Desk
          </h1>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
          >
            {isCollapsed ? <FaBars /> : <FaChevronLeft />}
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center text-gray-700 mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Location Name
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              08:30 AM Tue 20 Jan
            </span>
          </div>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link
            to="/orders"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <FaClipboardList className="mr-2" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Orders
            </span>
          </Link>
          <Link
            to="/subscriptions"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <FaBoxOpen className="mr-2" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Subscriptions
            </span>
          </Link>
          <Link
            to="/calendar"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <FaCalendarAlt className="mr-2" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Calendar
            </span>
          </Link>
          <Link
            to="/waitlist"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <FaUserFriends className="mr-2" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Waitlist
            </span>
          </Link>
        </nav>
      </div>

      <div>
        <Link
          to="/dashboard"
          className="flex items-center text-gray-700 hover:text-blue-600 mb-4"
        >
          <FaHome className="mr-2" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Dashboard
          </span>
        </Link>
        <div className="mt-auto mr-7 pt-4 border-t">
          {isCollapsed ? (
            <div className="flex justify-center">
              <FaUserCircle className="text-gray-600" size={24} />
            </div>
          ) : (
            <div>
              <p className="text-gray-600">Devanshu</p>
              <a href="mailto:adminname@gmail.com" className="text-blue-600">
                devanshudd4@gmail.com
              </a>
            </div>
          )}
        </div>
        <Link
          to="/help"
          className="flex items-center text-gray-700 hover:text-blue-600 mt-4"
        >
          <FaQuestionCircle className="mr-2" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Help Center
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
