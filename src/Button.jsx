import React, { Component } from "react"

function Button({ onClick, label, children }) {

    return (
        <div onClick={onClick}>
            <button>{label}</button>{children}
        </div>
    )
}

export default Button