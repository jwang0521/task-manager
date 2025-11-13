import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const styles = {
    topbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "#FAF7F3",
      borderBottom: "1px solid #ddd",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderRadius: "20px",
    },
    searchInput: {
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      border: "1px solid #ccc",
      width: "300px",
      outline: "none",
    },
    newTaskButton: {
      padding: "0.5rem 1.5rem",
      borderRadius: "20px",
      backgroundColor: "#D9A299",
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      marginLeft: "1rem",
    },
    profileIcon: {
      fontSize: "2rem",
      color: "black",
      marginLeft: "1rem",
      cursor: "pointer",
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
    },
  };
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  return (
    <div style={styles.topbar}>
      <input
        type="text"
        placeholder="Search tasks"
        style={styles.searchInput}
      />

      <div style={styles.rightSection}>
        <button style={styles.newTaskButton}>New Task</button>
        <FaRegCircleUser style={styles.profileIcon} onClick={goToProfile} />
      </div>
    </div>
  );
};
export default TopBar;
