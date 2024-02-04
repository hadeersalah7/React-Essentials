import React from 'react'

const ExamplesSection = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

export default ExamplesSection