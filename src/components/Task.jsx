import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { FaPen } from "react-icons/fa";
import { IoIosTrash } from "react-icons/io";

const Task = ({ task }) => {
  // remove the created task from the list
  const { removeTask, findItem} = useContext(TaskContext);

  return (
    <li className="flex justify-between m-3 mb-2">
      <span className="text-white capitalize">{task.title}</span>

      <div className="flex gap-x-2">
        <button
          onClick={() => removeTask(task.id)}
          className=" text-white task-btn"
        >
          <IoIosTrash size={25} />
        </button>

        <button
            onClick={() => findItem(task.id)}
        className="text-white task-btn">
          <FaPen size={20} />
        </button>
      </div>
    </li>
  );
};

export default Task;
