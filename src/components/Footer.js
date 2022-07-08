import { Link } from "react-router-dom"
import React, { Component } from 'react';
const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <Link to="/Task-Tracker-React/about">About</Link>
    </footer>
  )
}

export default Footer