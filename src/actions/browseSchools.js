export const listSchools = schools => {
    return {
        type: "LIST_SCHOOLS",
        schools //payload: schools
    }
}

export const fetchSchools = (browseFormData) => {
  console.log("fetch working", browseFormData.usa_state)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.greatschools.org/schools/${browseFormData.usa_state}/${browseFormData.city}?key=REACT_APP_GREATSCHOOLS_API_KEY`
      return  dispatch => {
        fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => {
          console.log("fetch working",data)
          if (data.error) {
            alert(data.error)
          } else {
            
            // dispatch(listSchools(r))
          }
        })
        .catch(console.log)  
    }
}

//CHANGE API WOMANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN