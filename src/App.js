import { useState, useEffect } from "react"
import React, { Component } from 'react';
import {Route, Routes, HashRouter } from "react-router-dom";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import { TaskDetails } from "./components/TaskDetails";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  // Mounted hook
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      // console.log(tasksFromServer);
      const arr = Object.keys(tasksFromServer)
      let tasksArray = []
      arr.forEach(element => {
        tasksArray.push(tasksFromServer[element])
      })
      arr.forEach(elem => {
        tasksFromServer[elem].id = elem
      })
      setTasks(tasksArray)
    }

    getTasks()
  }, [])


  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json')
    const data = await res.json()

    // console.log(data);
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`)
    const data = await res.json()
    return data
  }

  // Delete task
  const onDelete = async (id) => {
    console.log(id);
    await fetch(`https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((element) => element.id !== id))
  }


  // Reminder
  const toggleReminder = async (id) => {
    console.log(id);

    const toggleToTask = await fetchTask(id)
    const updatedTask = { ...toggleToTask, reminder: !toggleToTask.reminder }

    const res = await fetch(`https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }


  // Add Task
  const addTask = async (task) => {
    try {
      const res = await fetch('https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      const postData = await fetchTask(data.name)
      postData.id = data.name
      console.log(postData);
      setTasks([...tasks, postData])

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <HashRouter >
      <div className="container">

        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route path='/'
            element={<>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} /> : 'No Tasks'}
            </>}/>
          <Route path='/Task-Tracker-React/about' element={<About></About>} />
          <Route path="/Task-Tracker-React/task/:id" element={<TaskDetails />}/>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
