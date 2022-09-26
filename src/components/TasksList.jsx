import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import Task from './Task'

// image

import img1 from '../assets/031.png'


const TasksList = () => {

    const {tasks} = useContext(TaskContext)

  return (
    <div className=''>
        {/* conditional rendering */}

        {tasks.length ? (
             <ul className='w-[100%] m-auto max-h-[600px] overflow-hidden overflow-y-hidden text-white'>
             {tasks.map((task) => (
                 <Task  task={task} key={task.id}/>
             ))}
         </ul>

        ) : (
            <div className='flex flex-col items-center justify-center py-5'>
                <h1 className='text-white text-center mb-3 capitalize'>enter new task</h1>
                <img src={img1} alt=""  className='w-44 h-44 object-cover'/>
            </div>
        )}
       
    </div>
  )
}

export default TasksList