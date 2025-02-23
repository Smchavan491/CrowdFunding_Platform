import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // For navigation

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex" style={{ height: "100vh", backgroundColor: "#FFFFFF" }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column text-white align-items-center"
        style={{
          backgroundColor: "#1C1C1C",
          width: isSidebarOpen ? "180px" : "50px",
          transition: "width 0.3s ease",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Sidebar Header */}
        <div className="d-flex align-items-center justify-content-between w-100 p-2">
          <h5 className={`mb-0 w-100 text-center ${isSidebarOpen ? "d-block" : "d-none"}`}>
            Dashboard
          </h5>
          <button
            className="btn btn-light p-1"
            onClick={toggleSidebar}
            style={{ width: "30px", height: "30px" }}
          >
            ☰
          </button>
        </div>
        <hr className="w-100" />

        {/* Sidebar Links */}
        <div className="d-flex flex-column align-items-center w-100" style={{ flexGrow: 1 }}>
          {[
            { icon: "🏠", text: "Home", path: "/" }, // Navigate to the existing Home Page
            { icon: "📊", text: "Reports", path: "/reports" },
            { icon: "💼", text: "Projects", path: "/projects" },
            { icon: "💳", text: "Payment Process", path: "/payment" }, // Updated from Settings to Payment Process
            { icon: "🚪", text: "Logout", path: "/logout" },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center text-white p-2 rounded w-100"
              style={{
                textAlign: "center",
                justifyContent: isSidebarOpen ? "center" : "center",
                flexDirection: isSidebarOpen ? "row" : "column",
                cursor: "pointer",
              }}
              onClick={() => navigate(item.path)} // Navigate to the respective path
            >
              <span className="fs-5">{item.icon}</span>
              <span className={isSidebarOpen ? "d-block ms-2 fs-6" : "d-none"}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg shadow-sm p-2 w-100" style={{ backgroundColor: "#1C1C1C" }}>
          <span className="navbar-brand text-white fs-5">Dashboard</span>
          <div className="ms-auto d-flex gap-3">
            {/* Notification Icon */}
            <div
              className="text-white d-flex align-items-center fs-5"
              onMouseEnter={() => setHovered("notification")}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              🔔
              {hovered === "notification" && <span className="ms-2 text-white fs-6">Notification</span>}
            </div>

            {/* Profile Icon - Navigates to Profile Page */}
            <div
              className="text-white d-flex align-items-center fs-5"
              onMouseEnter={() => setHovered("profile")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate("/profile")} // Navigate to Profile Page
              style={{ cursor: "pointer" }}
            >
              👤
              {hovered === "profile" && <span className="ms-2 text-white fs-6">Profile</span>}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
