import React from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#F0E4D3",
      position: "fixed",
    },
    left: { marginLeft: "300px", padding: "3rem" },
  };
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.left}>
        <h1>Under Construction</h1>
      </div>
    </div>
  );
};

export default Settings;
