import React from 'react'

const CoreConcepts = ({img, alt, description, title}) =>{
  return (
      <li>
          <img src={img} alt={alt} />
          <h3>{description}</h3>
          <p>{title}</p>   
          
</li>
  )
}

export default CoreConcepts