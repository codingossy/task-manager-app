import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid";

const TaskContext = createContext();

export const TaskContextListProvider = ({ children }) => {
    //   initial state to store in local
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    // handle main tasks
  const [tasks, setTasks] = useState(initialState);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) 

  //add new task
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  //add remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //   clear all tasks
  const clearTask = () => {
    setTasks([]);
  };

  //   edit item
  const [editItem, setEditItem] = useState(null);

  // edit items
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    // to clear input
    setEditItem(null);
  };

  // to find item on list
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editItem,
        editTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
