export const setMyBookmarks = bookmarks => {
    return {
      type: "SET_MY_BOOKMARKS",
      bookmarks
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
          alert(response.error)
        } else {
          dispatch(setMyBookmarks(r.data))
        }
      })
      .catch(console.log)
  }
}