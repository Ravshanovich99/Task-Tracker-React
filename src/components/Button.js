import PropTypes from 'prop-types'
import React, { Component } from 'react';


const Button = ({ title, color, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
            {title}
        </button>
    )
}

Button.defaultProps = {
    title: 'Add',
    color: 'steelblue'
}


Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button