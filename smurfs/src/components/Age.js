import React from 'react';

import {connect} from 'react-redux';

class Age extends React.Component {
   
    render() {
        return (
            <h3 className='paragraph ageH3'>Age: {this.props.age}</h3>
        );
    }
}

const mapStateToProps = state => {
    return {
    //used map to map over state instead of using name: state[0].age    
        age: state.map(age => age.age)
    }
}

export default connect(mapStateToProps, {})(Age);