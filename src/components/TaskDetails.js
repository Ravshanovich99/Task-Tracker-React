import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import Button from "./Button"
import React, { Component } from 'react';

export const TaskDetails = () => {
    const [task, setTask] = useState({})
    // const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`https://task-tracker-7a85a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${params.id}.json`)
            const data = await res.json()
            if (res.status !== 200 || !data) {
                navigate('/Task-Tracker-React')
                // setError('Task Not Found')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })

    // if(error){
    //     return <Navigate to='/' />
    // }

    return loading ? (
        <h3>Loading ...</h3>
    ) : (
        <div>
            <p>pathname: {pathname}</p>
            <h2>{task.text}</h2>
            <p>{task.day}</p>
            <Button title="Go Back" onClick={() => {
                navigate(-1) // bitta oldingi page ga qaytaradi
            }}/>
        </div>
    )
}
