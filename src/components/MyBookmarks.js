import React from 'react'
import { connect } from 'react-redux'
import BookmarkCard from './BookmarkCard.js' 
import { ListGroup } from 'react-bootstrap';

//funtional container component:
const MyBookmarks = props => {
    const bookmarkCards = props.bookmarks.length > 0 ? 
    props.bookmarks.map(b => <ListGroup><ListGroup.Item><BookmarkCard bookmark={b} key={b.id}/></ListGroup.Item> </ListGroup>)
    : null
    return (
        bookmarkCards
    )
}

//We call this function mapStateToProps by convention, so that everyone knows what it is doing, but it could be named whatever
//Here we grab our Bookmarks array from the state of the store!!!
//And that's exactly why we need this function, because we need access to our redux store
const mapStateToProps = state => {
    return {
      bookmarks: state.myBookmarks
    }
}

export default connect(mapStateToProps)(MyBookmarks)