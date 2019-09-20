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
        // this.setState({
        //     email: "",
        //     password: ""
        //   })
        // };
      //reset the React state after submit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
     }
   
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
 
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

// {/* <> </> is called fragment */}

const mapStateToProps = state => {
    return {
        browseFormData: state.browseSchoolsForm,
        schoolsList: state.browseSchoolsForm,
        entireState: state
    }
}

export default connect( mapStateToProps, { fetchSchools } ) (BrowseSchools);