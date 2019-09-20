import React from 'react'
// import {Link} from 'react-router-dom'

const SchoolCard = ({ school }) => {
  return ( 
    <div key={school.id}>
      <img src={school.image_url} alt={`School: ${school.name}`}/>
      <h1>{school.name}</h1>
      <p>{school.location.city} | {school.phone} </p>
    </div> 
  )
}

export default SchoolCard