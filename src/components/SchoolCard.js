import React from 'react'
// import {Link} from 'react-router-dom'

const handleClick = () => {
  addSchoolToBookmarks
}

const SchoolCard = ({ school }) => {
  return ( 
    <div key={school.id}>
      <h1>{school.name}</h1>
      <h3>{`Rating: ${school.rating}`}</h3>
      <p>{school.location.city}, {school.location.state}  |  {school.phone} </p>
      <img src={school.image_url} alt={`School: ${school.name}`}/><br/><br/>
      <a target="_blank" href={school.url}>Learn more about this school</a><br/><br/>
      <button onClick={handleClick}>Bookmark this school</button>
    </div> 
  )
}

// const handleClick = props => <button onClick={props.onClick}></button>

export default SchoolCard



// Like for a stateless component, just add a function -

// function addName(){
//    console.log("name is added")
// }
// and it is called in the return as onChange={addName}