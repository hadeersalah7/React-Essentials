import React, {useState} from 'react'
import { renderedData } from '../../data'
import TapButton from '../TabButton/TapButton'
import ExamplesSection from '../ExamplesSection/ExamplesSection'
import Tabs from '../Tabs/Tabs'
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
        <ExamplesSection id="examples">
            <h2>Examples</h2>
            <Tabs buttons={
                <>
                    <TapButton isSelected={selectedContent === "components"} onClick={() => handleSelecOption("components")}>
                        Components
                    </TapButton>
                    <TapButton isSelected={selectedContent === "jsx"} onClick={() => handleSelecOption("jsx")}>
                        JSX
                    </TapButton>
                    <TapButton isSelected={selectedContent === "state"} onClick={() => handleSelecOption("state")}>
                        State
                    </TapButton>
                    <TapButton isSelected={selectedContent === "props"} onClick={() => handleSelecOption("props")}>
                        Props
                    </TapButton>
                </>
            }>
                
                {tapContent}
            </Tabs>
        </ExamplesSection>
    )
}

export default Examples