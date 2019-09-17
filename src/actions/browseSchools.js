export const fetchSchools = (state, city) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.greatschools.org/schools/${state}/${city}?key=`
      return  dispatch => {
        fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(r => console.log(r) )   
    }
}