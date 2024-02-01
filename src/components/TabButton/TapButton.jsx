import React from 'react'
import "./tap-button.scss"
const TapButton = ({children, onSelect}) => {
    return (
        <>
            <li>
                <button onClick={onSelect}>
                    {children}
                </button>
        </li>
        </>
    )
}

export default TapButton