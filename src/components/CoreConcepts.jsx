import React from 'react'

const CoreConcepts = ({title, alt, image, description}) =>{
  return (
      <li>
          <img src={image} alt={alt} />
          <h3>{title}</h3>
          <p>{description}</p>   
          
</li>
  )
}

export default CoreConcepts