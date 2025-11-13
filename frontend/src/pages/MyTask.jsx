import Sidebar from "../components/Sidebar";

const MyTask = () => {
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
      <Sidebar />
      <div style={styles.left}>
        <h1>Under Construction</h1>
      </div>
    </div>
  );
};

export default MyTask;
