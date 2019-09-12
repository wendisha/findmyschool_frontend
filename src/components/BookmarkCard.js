import React from 'react'
// import {Link} from 'react-router-dom'

const BookmarkCard = ({ bookmark }) => {
  return ( <p>{bookmark.attributes.school_name}</p> )
}

export default BookmarkCard