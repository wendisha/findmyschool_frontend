export const listSchools = schools => {
    return {
        type: "LIST_SCHOOLS",
        schools //payload: schools
    }
}

export const fetchSchools = (browseFormData) => {
  console.log("fetch working", browseFormData)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.yelp.com/v3/businesses/search?term=school&location=${browseFormData.zipcode}&limit=1`
      return  (
        fetch(proxyurl + url,  {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': process.env.REACT_APP_YELP_API_KEY,
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        .then(data => {
          console.log("fetch working",data)
          if (data.error) {
            alert(data.error)
          } else {
            // dispatch(listSchools(data))
          }
        })
        .catch(console.log)  
    )
}


//CHANGE API WOMANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN