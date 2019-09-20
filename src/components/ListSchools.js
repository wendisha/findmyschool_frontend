import React from 'react';
import { connect } from 'react-redux';
import SchoolCard from './SchoolCard';


// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
const ListSchools = (props) => {

    // const renderSchoolsList = () => {
    //     return props.schoolsList.map((school) => {
    //         return (                               
    //             <div key={school.id}>
    //                 <img src={school.image_url} alt={`School: ${school.name}`}/>
    //                 <h1>{school.name}</h1>
    //                 <p>{school.location.city} | {school.phone} </p>
    //             </div>           
    //         );
    //     })
    // }
    const renderSchoolsList = () => {
        const schoolCards = props.schoolsList.length > 0 ? props.schoolsList.map(s => <SchoolCard school={s} />) : null
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