import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { TaskContextListProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App w-full h-[100vh] flex items-center justify-center">
      <TaskContextListProvider>
        <div className="bg-black px-2 w-[25%] min-w-[400px] h-[500px] p-3 box-border rounded-md shadow-xl">
          <div>
            <Header />

            <div className="main">
              <TaskForm />
              <TasksList />
            </div>
          </div>
        </div>
      </TaskContextListProvider>
    </div>
  );
}

export default App;
