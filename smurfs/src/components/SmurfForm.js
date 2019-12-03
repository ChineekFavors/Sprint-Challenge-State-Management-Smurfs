import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import {addSmurf} from './actions/smurfAction';


const SmurfForm = (props) => {

    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});
   

   

    const handleChange = (e) => {
        setNewSmurf({
            ...newSmurf, 
            [e.target.name]: e.target.value
        });

    };
   
        const onSubmit = (e) => {
            e.preventDefault();
            props.addSmurf(newSmurf);

            setNewSmurf({
                name: '', 
                age: '', 
                height: ''
            });
        };

  

    return (
        <>
            <h3>Add a new smurf to your smurf village</h3>
            <form onSubmit={onSubmit}>
                <label>
                     Name:
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="name" 
                        value={newSmurf.name} 
                        placeholder='enter name'
                    />
                </label>
                <label>
                     Age:
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="age" 
                        value={newSmurf.age} 
                        placeholder='enter age'
                    />
                </label>
                <label>
                     Height:
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="height" 
                        value={newSmurf.height} 
                        placeholder='enter height'/>
                </label>
                <button type='submit'>Add Smurf</button>
            </form>
        </>
    );
};
const mapDispatchToProps = {
    addSmurf 
  }


export default connect(null, mapDispatchToProps)(SmurfForm);