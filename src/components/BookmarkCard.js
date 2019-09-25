import React from 'react'

//Props get passed into a functional component as an object argument
const BookmarkCard = ({ bookmark }) => {
  return ( <p>{bookmark.attributes.school_name}</p> )
}

export default BookmarkCard