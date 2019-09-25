import React from 'react'
import { connect } from 'react-redux';
import { fetchSchools } from '../actions/browseSchools.js';
import ListSchools from './ListSchools'

class BrowseSchools extends React.Component {
   
    state = {
        zipcode: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchSchools(this.state)  
    }
   
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    // <> </> is called fragment 
    render (){
        return (     
            <>  
            <form onSubmit={ this.handleSubmit }>
                <h1>Enter zipcode to browse schools:</h1>
                <input placeholder="zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                <input type="submit" value="Browse"/>
            </form>
            <ListSchools />
            </>
        )   
    }   
}

const mapStateToProps = state => {
    return {
        browseFormData: state.browseSchoolsForm,
        schoolsList: state.browseSchoolsForm,
        entireState: state
    }
}

//fetchSchools is being dispatched to props
export default connect( mapStateToProps, { fetchSchools } ) (BrowseSchools);