import React from 'react';

const SmurfForm = () => {
    return (
        <>
            <h3>Add a new smurf to your smurf village</h3>
            <form>
                <label>
                     Name:
                    <input type="text" name="name" placeholder='enter name'/>
                </label>
                <label>
                     Age:
                    <input type="text" name="age" placeholder='enter age'/>
                </label>
                <label>
                     Height:
                    <input type="text" name="height" placeholder='enter height'/>
                </label>
                <button type='submit'>Add Smurf</button>
            </form>
        </>
    );
};
export default SmurfForm;