import React from 'react';
import { connect } from 'react-redux';
import SchoolCard from './SchoolCard';


// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
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
    return {
        schoolsList: state.browseSchoolsForm
    }
}

export default connect(mapStateToProps)(ListSchools);