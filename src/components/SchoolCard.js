import React from 'react'
import { connect } from 'react-redux';
import { addSchoolToBookmarks } from '../actions/myBookmarks']

const SchoolCard = ({ school, addSchoolToBookmarks }) => {

  const handleClick = (event) => {
    event.preventDefault()
    addSchoolToBookmarks(school)
  }

  return ( 
    <div key={school.id}>
      <h1>{school.name}</h1>
      <h3>{`Rating: ${school.rating}`}</h3>
      <p>{school.location.city}, {school.location.state}  |  {school.phone} </p>
      <img src={school.image_url} alt={`School: ${school.name}`}/><br/><br/>
      <a target="_blank" href={school.url}>Learn more about this school</a><br/><br/>
      <button onClick={handleClick}> Bookmark </button>
    </div>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
      schoolInfo: state.browseSchoolsForm,
      userId
  }
}

export default connect(mapStateToProps, {addSchoolToBookmarks})(SchoolCard);

//  REFACTOR TO CALL STATE IN THE CONTAINER, NOT HERE