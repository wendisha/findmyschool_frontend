import React from 'react'
// import {Link} from 'react-router-dom'

const SchoolCard = ({ school }) => {
  return ( 
    <div key={school.id}>
      <h1>{school.name}</h1>
      <h3>{`Rating: ${school.rating}`}</h3>
      <p>{school.location.city}, {school.location.state}  |  {school.phone} </p>
      <img src={school.image_url} alt={`School: ${school.name}`}/><br/><br/>
      <a target="_blank" href={school.url}>Learn more about this school</a>
    </div> 
  )
}

export default SchoolCard