import React from 'react';
import { connect } from 'react-redux';
import SchoolCard from './SchoolCard';
import { addSchoolToBookmarks } from '../actions/myBookmarks';

const ListSchools = (props) => {
    const renderSchoolsList = () => {
        const schoolCards = props.schoolsList.length > 0 ? props.schoolsList.map(s => <SchoolCard school={s} key={s.id}/>) : null
        return (schoolCards)
    }

    return (  
        <div>  
            <ul>
                {renderSchoolsList()}
            </ul>
        </div> 
    )
}

const mapStateToProps = state => {
    // const userId = state.currentUser ? state.currentUser.id : ""
    return {
        schoolsList: state.browseSchoolsForm
        // userId
    }
}

export default connect(mapStateToProps, {addSchoolToBookmarks})(ListSchools);