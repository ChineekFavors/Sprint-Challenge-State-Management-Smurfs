import React from "react";


import Name from './Name.js';
import Age from './Age.js';
import SmurfForm from './SmurfForm.js';

import "./App.css";


const App = () => {
 

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        
        <div className='smurf-container'>
            <Name />
            <Age />
          </div>
          <div>
            <SmurfForm />
          </div>
      </div>
    );
  
};

 

export default App;
