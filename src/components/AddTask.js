import { useState } from "react"
import React, { Component } from 'react';


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const id = Math.floor(Math.random() * 10000) + 1

    const submitHandler = (e) => {
        e.preventDefault()

        if(!text){
            alert('You have to add a task')
            return
        }

        onAdd({text, day, reminder, id})
        setText('')
        setReminder(false)
        setDay('')


    }

    return (
        <form className="add-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" placeholder="Add Task" id="task" value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="date">Day & Time</label>
                <input type="text" placeholder="Add Task" id="date" value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Reminder</label>
                <input type="checkbox" id="reminder" value={reminder} checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <button type='submit' className="btn btn-block" >Submit</button>
        </form>
    )
}

export default AddTask