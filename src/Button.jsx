import React from "react"

function Button({ onClick, label, children }) {

    return (
        <div>
            <div onClick={onClick}>
                <button>{label}</button>{children}
            </div>
            {/* <button>{label}</button> */}
        </div>
    )
}

export default Button