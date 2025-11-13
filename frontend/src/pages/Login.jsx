import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#F0E4D3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
    },

    card: {
      backgroundColor: "#FAF7F3",
      height: "auto",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: "10px",
      width: "320px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },

    title: { fontFamily: "system-ui", marginBottom: "1rem" },
    form: { display: "flex", flexDirection: "column" },
    label: {
      fontFamily: "system-ui",
      textAlign: "left",
      marginBottom: "0.5rem",
      color: "#555",
      fontSize: "large",
    },
    input: {
      padding: "0.5rem",
      marginBottom: "1rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "0.5rem 2rem",
      fontSize: "1rem",
      backgroundColor: "#D9A299",
      color: "#fff",
      borderRadius: "20px",
      border: "1px solid black",
      marginTop: "20px",
      cursor: "pointer",
    },
    switchText: {
      marginTop: "1rem",
      color: "#555",
      fontSize: "0.9rem",
      fontFamily: "system-ui",
    },
    switchLink: {
      color: "#D9A299",
      fontWeight: "bold",
      cursor: "pointer",
    },
    error: {
      color: "red",
      marginTop: "0.5rem",
    },
  };

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // LOGIN
      if (email === "admin@example.com" && password === "123") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } else {
      // SIGN UP
      if (!name.trim()) {
        setError("Please enter your name");
      } else if (password !== confirmPassword) {
        setError("Passwords do not match");
      } else {
        alert(`Welcome, ${name}! Signup successful. You can now log in.`);
        setIsLogin(true);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
            </>
          )}

          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          {!isLogin && (
            <>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.input}
                required
              />
            </>
          )}

          <button type="submit" style={styles.button}>
            {isLogin ? "Continue" : "Create Account"}
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </form>

        <p style={styles.switchText}>
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span style={styles.switchLink} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
