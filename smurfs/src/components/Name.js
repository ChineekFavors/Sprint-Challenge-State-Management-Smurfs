import React from 'react';

import {connect} from 'react-redux';


const Name = (props) => {
	
	
	return (
		<>
	
			<h3 className='paragraph nameH3'>Name: {props.name}</h3>
		</>
	);
};


const mapStateToProps = state => {
	return{
	//used map to map over state instead of using name: state[0].name
		name: state.map(name => name.name)
	}
};

export default connect(mapStateToProps, {})(Name);