import React from 'react';

import {connect} from 'react-redux';


const Name = (state) => {
	console.log(state.name)
	return (
		<h3>surf Name</h3>
	);
}

const mapStateToProps = state => {
	return{
		name: state.name,
	}
}

export default connect(mapStateToProps, {})(Name);