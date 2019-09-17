import React from 'react'
import { connect } from 'react-redux';
import { fetchSchools } from '../actions/browseSchools.js';

class browseSchools extends React.Component {
   
    state = {
        usa_state: '',
        city:''
    }

    handleBrowseInput = event => {
        const { name, value } = event.target
        const updatedBrowseFormInfo = {
          ...browseFormData,
          [name]: value
        }
        updateBrowseForm(updatedBrowseFormInfo)
    }
   
    handleSubmit = event => {
        event.preventDefault()
        fetchSchools(browseFormData)
    }

    render (){
        return (
            <h1>Enter your State and City to browse schools:</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="state" value={browseFormData} type="text" name="usa_state" onChange={this.handleBrowseInput} />
                <input type="submit" value="Browse"/>
            </form>
        )   
    }   
}

export default connect( null, { fetchSchools } ) (BrowseSchools);



