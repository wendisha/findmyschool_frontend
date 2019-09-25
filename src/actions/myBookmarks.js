export const setMyBookmarks = bookmarks => {
  return {
    type: "SET_MY_BOOKMARKS",
    bookmarks
  } 
}

export const clearBookmarks = () => {
  return {
    type: "CLEAR_BOOKMARKS"
  }
}

export const addBookmark = bookmark => {
  return {
    type: "ADD_BOOKMARK",
    bookmark
  }
}

export const getMyBookmarks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/bookmarks", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(r => {
      if (r.error) {
        alert(r.error)
      } else {
        dispatch(setMyBookmarks(r.data))
      }
    })
    .catch(console.log)
  }
}

export const addSchoolToBookmarks = (schoolData) => {
  return dispatch => {
    const sendableSchoolData = {
      name: schoolData.name,
      city: schoolData.location.city,
      state: schoolData.location.state,
      phone: schoolData.phone,
      url: schoolData.url,
      rating: schoolData.rating
    }
    return fetch("http://localhost:3001/api/v1/schools", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableSchoolData)
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch(getMyBookmarks())
        alert('Successfully bookmarked!');
      }
    })
    .catch(console.log)
  }
}