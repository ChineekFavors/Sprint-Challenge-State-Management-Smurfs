 import {FETCHING_SMURF_DATA} from '../components/actions/smurfAction.js';
const initialState = {
  // {
  //   name: "",
  //   age: '',
  //   height: "",
  //   id: null
  // }
};



export const smurfReducer = (state = initialState, action) =>{
  switch(action.type) {
    case FETCHING_SMURF_DATA:
    console.log('smurReducer.js:action.payload',action.payload)
      return {
        
        name: action.payload.map(name => name.name),
        age: action.payload.map(age => age.age),
        height: action.payload.map(height => height.height),
        id: action.payload.map(id => id.id),
      
      }
    default:
      return state
    }

}