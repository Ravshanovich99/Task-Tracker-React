import Button from "./Button"
import React, { Component } from 'react';


const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button title={showAdd ? 'Close' : 'Add' } color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
    </header>
  )
}



// default props
Header.defaultProps = {
    title: 'Task Tracker'
}


// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header