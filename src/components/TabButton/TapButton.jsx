import React from 'react'
import "./tap-button.scss"
const TapButton = ({children}) => {
    return (
        <>
            <li>
                <button>
                    {children}
                </button>
        </li>
        </>
    )
}

export default TapButton