import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

const SimpleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        defaultActiveStartDate={new Date()}
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>

      <style>{`
        .react-calendar {
        width: 350px;
        max-width: 100%;
        background-color: #FAF7F3;
        border: none;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        padding: 1rem;
      }

      .react-calendar__tile {
        border: none !important;
        border-radius: 10px;
        transition: background 0.3s, color 0.3s;
        color: black;
      }
        

      /* Selected date (the one in state) */
      .react-calendar__tile--active {
        background-color: #D9A299 !important;
        color: white !important;
      }

      /* Today (when it's not selected) */
      .react-calendar__tile--now:not(.react-calendar__tile--active) {
        border: 1px solid #D9A299 !important;
        background-color: transparent !important;
        color: black !important;
      }

      .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      .react-calendar__navigation button {
        color: black;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.3s;
      }

      .react-calendar__navigation button:hover {
        background-color: #a17c6b;
      }

      .react-calendar__navigation__label {
        font-weight: bold;
        font-size: 1rem;
        color: #333;
      }
    `}</style>
    </div>
  );
};

export default SimpleCalendar;
