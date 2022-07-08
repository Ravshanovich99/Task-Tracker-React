import { FaTimes } from 'react-icons/fa'
import React, { Component } from 'react';

import {Link} from 'react-router-dom'
const Task = ({ task, onDelete, toggleReminder }) => {
    return (
      <div className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => toggleReminder(task.id)}>
        <h3>{task.text}
          <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red' }} />
        </h3>
        <p>{task.day}</p>
        <p><Link to={`/Task-Tracker-React/task/${task.id}`}>Task Details</Link></p>
      </div>
    )
}

export default Task