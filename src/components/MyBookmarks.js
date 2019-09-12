import React from 'react'
import { connect } from 'react-redux'
import BookmarkCard from './BookmarkCard.js' 

//funtional container component:
const MyBookmarks = props => {
    const bookmarkCards = props.bookmarks.length > 0 ? props.bookmarks.map(b => <BookmarkCard bookmark={b} key={b.id}/>) : null
    return (
        bookmarkCards
    )
}


//We call this function mapStateToProps by convention, so that everyone knows what it is doing, but it could be named whatever
//Here we grab our Bookmarks array from the state of the store!!!
//And that's exactly why we need this function, because we need access to our redux store

//Howard: 
// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."
const mapStateToProps = state => {
    return {
      bookmarks: state.myBookmarks
    }
}

export default connect(mapStateToProps)(MyBookmarks)