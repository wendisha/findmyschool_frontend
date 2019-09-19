import React from 'react'
import { connect } from 'react-redux';
import { fetchSchools } from '../actions/browseSchools.js';

class BrowseSchools extends React.Component {
   
    state = {
        zipcode: ''
    }

     handleSubmit = event => {
        event.preventDefault()
        this.props.fetchSchools(this.state)
        // console.log("hi wendy",this.state)

        // this.setState({
        //     email: "",
        //     password: ""
        //   })
        // };
      //reset the React state after submit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
        // we have the react state that we need to pass into afucntion that will fire a get request to an api--  this.state
     }

    
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    render (){
        return (     
            <form onSubmit={ this.handleSubmit }>
                <h1>Enter zipcode to browse schools:</h1>
                <input placeholder="zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                {/* <input placeholder="city" type="text" name="city" onChange={this.onChange}/> */}
                <input type="submit" value="Browse"/>
            </form>
        )   
    }   
}

const mapStateToProps = state => {
    return {
        browseFormData: state.browseSchools
    }
}

export default connect( mapStateToProps, { fetchSchools } ) (BrowseSchools);