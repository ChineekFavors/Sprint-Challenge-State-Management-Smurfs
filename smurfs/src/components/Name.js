import React,{useEffect, useState} from 'react';

import {connect} from 'react-redux';


const Name = (props) => {
	
	 console.log(props.name)
	 useEffect( () => {
		
	
	  });
	

	return (
	
		<div>
			{/* {props.name.map( smurf => (<h3 className='paragraph nameH3'>{smurf}</h3> ))}  */}

			{/* <h3 className='paragraph nameH3'>Name:</h3> 
			<h3>{props.name}</h3> */}
		</div>
	);
};


const mapStateToProps = state => {
	
	return{
		
		 name: state.name
	}
};

export default connect(mapStateToProps, {})(Name);