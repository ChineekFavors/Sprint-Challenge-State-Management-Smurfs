import {FETCHING_SMURF_DATA} from '../components/actions/smurfAction.js';


const initialState = {
  
     isDataLoaded: false,
     success: false,
     error: null,
};



export const smurfReducer = (state = initialState, action) =>{
  switch(action.type) {
    case FETCHING_SMURF_DATA:
    // console.log('smurfReducer.js:action.payload',action.payload.map(smurf => smurf.name))
      return {  
        // ...state,
        // success: true,
      name : action.payload.map(smurf => smurf.name),
      }
    

    default:
      return state
  }

}