export const listSchools = schools => {
    return {
        type: "LIST_SCHOOLS",       //label to allow the reducer to recognize what happened
        schools                     //payload: schools, this is the data that we passed to the action from a component
    }
}

export const clearSchools = () => {
  return {
      type: "CLEAR_SCHOOLS"                  
  }
}


export const fetchSchools = (browseFormData) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = `https://api.yelp.com/v3/businesses/search?term=school&location=${browseFormData.zipcode}&limit=5`
  return  dispatch => {
    fetch(proxyurl + url,  {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': process.env.REACT_APP_YELP_API_KEY,
        'Content-Type': 'application/json'
        }
      })
      .then(r => r.json())
      .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch(listSchools(data))
      }
    })
  .catch(console.log)  
  }
}