import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Calendar from "../components/Calendar";
import List from "../components/List";

const Dashboard = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#F0E4D3",
      position: "fixed",
    },
    left: { marginLeft: "300px", padding: "3rem" },
    bottom: { flex: 1, display: "flex", flexDirection: "row" },
  };
  return (
    <div style={styles.container}>
      <Sidebar style={styles.sidebar} />
      <div style={styles.left}>
        <TopBar />
        <div style={styles.bottom}>
          <Calendar />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
