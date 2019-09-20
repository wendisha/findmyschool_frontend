import React from 'react';
import { connect } from 'react-redux';
// import BrowseSchools from './BrowseSchools';


// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
const ListSchools = (props) => {

    const renderSchools = () => {
        return props.schoolsList.map((school) => {
            return (                               
                <div key={school.id}>
                    <img src={school.image_url} alt={`School: ${school.name}`}/>
                    <h1>{school.name}</h1>
                    <p>{school.location.city} | {school.phone} </p>
                </div>           
            );
        })
    }

    return (  
        <div>  
            <ul>
                {renderSchools()}
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