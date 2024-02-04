import React from 'react'
import "./tap-button.scss"
const TapButton = ({ children, isSelected, ...props }) => {
    return (
        <>
            <li>
                <button className={isSelected ? "active" : undefined} {...props}>
                    {children}
                </button>
        </li>
        </>
    )
}

export default TapButton