const initialState = []
  
export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            //console.log(action.schools.businesses)
            return action.schools.businesses  // action.schools
        default:
            return state
    }
}

// export default (state = initialState, action) => {
//   switch (action.type) {
//       case "LIST_SCHOOLS":
//           return {...state, schools: state.schools.concat(action.payload)}
//       default:
//           return state
//   }
// }


// return {
//     ...state,
//     breakfastBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'breakfast'),
//     lunchBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'lunch'),
//     dinnerBowls: action.saladBowls.filter(saladBowl => saladBowl.meal_time_frame === 'dinner')
//   }
