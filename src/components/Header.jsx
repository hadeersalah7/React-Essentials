import React from 'react'
import reactImg from "../assets/react-core-concepts.png"
const reactDescription = ["Fundmental", "Crucial", "Core"]

const generatedNumber = (n) => {
return Math.floor((Math.random() * (n + 1)))
}

const Header = () => {
  const description = reactDescription[generatedNumber(2)]
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header