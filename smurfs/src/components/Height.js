import React from 'react';
import {connect} from 'react-redux';

const Height = (props) => {
    return (
        <>
          <h3 className='paragraph heightH3'>Height: {props.height}</h3>
        </>
    );
};

const mapStateToProps = state => {
	return{
	//used map to map over state instead of using name: state[0].name
		height: state.height
	}
};

export default connect(mapStateToProps, {} )(Height);
