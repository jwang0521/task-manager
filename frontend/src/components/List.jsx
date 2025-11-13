import React, { useState } from "react";

const TodoListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const styles = {
    container: {
      width: "400px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#FAF7F3",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "1rem",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    input: {
      flex: 1,
      padding: "0.5rem 1rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      outline: "none",
    },
    addButton: {
      marginLeft: "0.5rem",
      padding: "0.5rem 1rem",
      backgroundColor: "#D9A299",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
    },
    taskList: {
      listStyle: "none",
      padding: 0,
    },
    taskItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: "0.5rem 1rem",
      borderRadius: "10px",
      marginBottom: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    completed: {
      textDecoration: "line-through",
      color: "#888",
    },
    deleteButton: {
      border: "none",
      background: "transparent",
      color: "#D9A299",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My To-Do List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <span
              style={task.completed ? styles.completed : {}}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteButton}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListContainer;
