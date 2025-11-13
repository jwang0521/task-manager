import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  const styles = {
    sidebar: {
      width: "250px",
      borderRadius: "20px",
      backgroundColor: "#FAF7F3",
      color: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "2rem 1rem",
      position: "fixed",
      left: "2rem",
      right: "2rem",
      top: "2rem",
      bottom: "2rem",
      fontFamily: "system-ui",
    },
    link: (isHovered) => ({
      color: "black",
      textDecoration: "none",
      marginBottom: "1.5rem",
      fontSize: "1.1rem",
      display: "flex",
      alignItems: "center",
      padding: "0.3rem 0.5rem",
      borderRadius: "10px",
      backgroundColor: isHovered ? "rgba(0,0,0,0.1)" : "transparent",
      transition: "all 0.2s ease",
      cursor: "pointer",
    }),
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "2rem",
    },
    bottomLinks: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.sidebar}>
      <div>
        <div style={styles.logo}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "60px",
              height: "50px",
              verticalAlign: "middle",
            }}
          />
          Task Manager
        </div>

        <Link
          to="/dashboard"
          style={styles.link(hovered === "dashboard")}
          onMouseEnter={() => setHovered("dashboard")}
          onMouseLeave={() => setHovered(null)}
        >
          <MdOutlineSpaceDashboard style={{ marginRight: "8px" }} />
          Dashboard
        </Link>

        <Link
          to="/task"
          style={styles.link(hovered === "tasks")}
          onMouseEnter={() => setHovered("tasks")}
          onMouseLeave={() => setHovered(null)}
        >
          <MdOutlineTaskAlt style={{ marginRight: "8px" }} />
          My Tasks
        </Link>
      </div>

      <div style={styles.bottomLinks}>
        <Link
          to="/settings"
          style={styles.link(hovered === "settings")}
          onMouseEnter={() => setHovered("settings")}
          onMouseLeave={() => setHovered(null)}
        >
          <VscSettings style={{ marginRight: "8px" }} />
          Settings
        </Link>

        <Link
          to="/"
          style={styles.link(hovered === "logout")}
          onMouseEnter={() => setHovered("logout")}
          onMouseLeave={() => setHovered(null)}
        >
          <MdOutlineLogout style={{ marginRight: "8px" }} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
