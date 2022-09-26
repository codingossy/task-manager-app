import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";

const TaskForm = () => {
    
  // adding task from the context
//   clearing whole task
  const { addTask , clearTask, editTask, editItem } = useContext(TaskContext);


  //  store current title in states
  const [title, setTitle] = useState("");



  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // edit if the edit is null
    if(!editItem){
        addTask(title)
        setTitle('')
    }else {
        editTask(title, editItem.id)
    }
    // to add the add
    addTask(title);
    // clear input field after each entry
    setTitle("");
  };

  
  useEffect(() => {
    if(editItem) {
        setTitle(editItem.title)
    } else {
        setTitle('')
    }
  }, [editItem])




  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mb-4"
    >
      <input
        onChange={handleChange}
        type="text"
        value={title}
        className="capitalize w-[350px] min-w-[250px] p-2 mr-3 text-sm text-black bg-gray-300 border border-gray-400 shadow-md rounded-md "
        placeholder="add new task"
        required
      />

      <div className="flex gap-x-3">
        <button
          type="submit"
          className="m-3 px-6 bg-green-500 text-white py-1 rounded-md uppercase cursor-pointer outline-none border-none"
        >
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>

        <button 
            onClick={() => clearTask()}
        className="uppercase m-3 bg-red-500 text-white px-6 py-1 rounded-md cursor-pointer outline-none hover:shadow-lg border-none">
          clear task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
