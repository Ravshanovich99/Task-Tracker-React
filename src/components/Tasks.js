import Task from "./Task"
import React, { Component } from 'react';


const Tasks = ({tasks, onDelete, toggleReminder}) => {

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
      ))}
    </div>
  )
}

export default Tasks