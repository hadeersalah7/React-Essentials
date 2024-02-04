import React, {useState} from 'react'
import { renderedData } from '../../data'
import TapButton from '../TabButton/TapButton'
const Examples = () => {
    const [selectedContent, setSelectedContent] = useState()
    const handleSelecOption = (selectedOption) => {
        setSelectedContent(selectedOption)
    }
    let tapContent = <p style={{ display: "flex", justifyContent: "start", alignItems: "start", paddingLeft: "15px" }}>Please Select A Content...</p>
    if (selectedContent) {
        tapContent = <div id="tab-content">
            <h3>{renderedData[selectedContent].title}</h3>
            <p>{renderedData[selectedContent].description}</p>
            <pre>
                <code>
                    {renderedData[selectedContent].code}
                </code>
            </pre>
        </div>
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TapButton isSelected={selectedContent === "components"} onSelect={() => handleSelecOption("components")}>
                    Components
                </TapButton>
                <TapButton isSelected={selectedContent === "jsx"} onSelect={() => handleSelecOption("jsx")}>
                    JSX
                </TapButton>
                <TapButton isSelected={selectedContent === "state"} onSelect={() => handleSelecOption("state")}>
                    State
                </TapButton>
                <TapButton isSelected={selectedContent === "props"} onSelect={() => handleSelecOption("props")}>
                    Props
                </TapButton>
            </menu>
            {tapContent}
        </section>
    )
}

export default Examples