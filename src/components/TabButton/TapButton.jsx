import React from 'react'
import "./tap-button.scss"
const TapButton = ({children, onSelect, isSelected}) => {
    return (
        <>
            <li>
                <button className={isSelected ? "active" : undefined} onClick={onSelect}>
                    {children}
                </button>
        </li>
        </>
    )
}

export default TapButton