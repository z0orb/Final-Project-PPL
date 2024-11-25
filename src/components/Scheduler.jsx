import React, { useEffect, useRef, useState } from "react";

const Scheduler = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("weeklyTasks")
      ? JSON.parse(localStorage.getItem("weeklyTasks"))
      : []
  );

  const [currentDay, setCurrentDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' })); // Get current day
  
  const taskRef = useRef();
  const dayRef = useRef();
  const timeRef = useRef();

  const addTask = () => {
    const taskName = taskRef.current.value.trim();
    const day = dayRef.current.value;
    const time = timeRef.current.value;

    if (!taskName || !day || !time) return;

    const newTask = {
      id: Date.now(),
      taskName,
      day,
      time,
    };

    setTasks((prev) => [...prev, newTask]);
    taskRef.current.value = "";
    dayRef.current.value = "Monday"; // Reset to default
    timeRef.current.value = "";
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("weeklyTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Filter tasks for the current day
  const todayTasks = tasks.filter((task) => task.day === currentDay);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Top Title */}
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Weekly Scheduler
      </h1>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Task Input */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Add Schedule
          </h2>
          <div className="space-y-4">
            {/* Day Selector */}
            <div>
              <label className="block text-gray-600 mb-1">Day</label>
              <select
                ref={dayRef}
                className="w-full border-gray-300 rounded p-2"
                defaultValue="Monday"
              >
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Task Name */}
            <div>
              <label className="block text-gray-600 mb-1">Schedule Name</label>
              <input
                ref={taskRef}
                type="text"
                className="w-full border-gray-300 rounded p-2"
                placeholder="Enter class name (e.g., Calculus)"
              />
            </div>

            {/* Time Picker */}
            <div>
              <label className="block text-gray-600 mb-1">Time</label>
              <input
                ref={timeRef}
                type="time"
                className="w-full border-gray-300 rounded p-2"
              />
            </div>

            {/* Add Button */}
            <button
              onClick={addTask}
              className="w-full bg-blue-500 text-white rounded p-2 font-semibold hover:bg-blue-600"
            >
              Add Schedule
            </button>
          </div>
        </div>

        {/* Right: Today's Task List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Today's Schedule ({currentDay})
          </h2>
          <div>
            {todayTasks.length > 0 ? (
              todayTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded shadow mb-2"
                >
                  <span>
                    {task.time} - {task.taskName}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No class scheduled for today.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
