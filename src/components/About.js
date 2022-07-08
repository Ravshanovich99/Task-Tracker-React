import { useNavigate } from "react-router-dom"
import React, { Component } from 'react';

const About = () => {
  const navigate = useNavigate()
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Task Tracker</h1>
        <h3>Version 1.0.0</h3>
        <p style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}} onClick={() => {
          navigate(-1)
        }} >Go Back</p>
    </div>
  )
}

export default About