import React from 'react'
import CoreConcepts from '../CoreConcepts/CoreConcepts'
import { DataObject } from '../../data'
const MainCoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
                {DataObject.map((data) => (
                    <CoreConcepts key={data.title} {...data} />
                ))}
            </ul>
        </section>
    )
}

export default MainCoreConcepts