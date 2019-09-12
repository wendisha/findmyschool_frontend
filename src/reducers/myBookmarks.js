export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_BOOKMARKS":
          return action.bookmarks
      default:
        return state
    }
}