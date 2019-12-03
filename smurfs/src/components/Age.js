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
       
         age: state.age
    }
}

export default connect(mapStateToProps, {})(Age);