import React from 'react'
import CoreConcepts from '../CoreConcepts/CoreConcepts'
import { DataObject } from '../../data'
import Section from '../Section/Section'
const MainCoreConcepts = () => {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
                {DataObject.map((data) => (
                    <CoreConcepts key={data.title} {...data} />
                ))}
            </ul>
        </Section>
    )
}

export default MainCoreConcepts