const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_BOOKMARKS":
            return action.bookmarks
        case "CLEAR_BOOKMARKS":
            return initialState
        case "ADD_BOOKMARK":
            return action.bookmark
        default:
            return state
    }
}