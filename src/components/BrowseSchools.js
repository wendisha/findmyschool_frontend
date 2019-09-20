import React from 'react'
import { connect } from 'react-redux';
import { fetchSchools } from '../actions/browseSchools.js';
// import SchoolCard from './SchoolCard' 
import ListSchools from './ListSchools'

class BrowseSchools extends React.Component {
   
    state = {
        zipcode: ''
    }

     handleSubmit = event => {
        event.preventDefault()
        this.props.fetchSchools(this.state) 

        // console.log('INSIDE THE FETCH HANDLE-SUBMIT') // 1
        // console.log(this.props.entireState) // 2
        // console.log('BUT AFTER THE entireState') // 3
        // console.log(this.props.schoolsList)
           
        // this.props.schoolsList.forEach( (school) => console.log(school))

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

    // listSchools = props => {
    //     const schoolCards = props.schoolsList.length > 0 ? props.schoolsList.map(s => <SchoolCard school={s} key={s.id}/>) : null
    //     console.log(schoolCards)
    //     return (
    //         schoolCards
    //     )
    //     // console.log(schoolCards)
    // }

    
    render (){
        return (     
            <> 
            <form onSubmit={ this.handleSubmit }>
                <h1>Enter zipcode to browse schools:</h1>
                <input placeholder="zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                <input type="submit" value="Browse"/>
            </form>
            <ListSchools />
            {/* <div className="schools">
                {console.log(this.props.schoolsList)}
                {console.log(this.props.entireState)}
            </div> */}
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