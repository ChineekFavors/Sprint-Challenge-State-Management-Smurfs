import axios from 'axios';

export const FETCHING_SMURF_DATA = 'FETCHING_SMURF_DATA';
const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR';
const ADD_SMURF = 'ADD_SMURF';

export const smursActionFetchData = () => {
   
    return (dispatch) => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => dispatch({type: FETCHING_SMURF_DATA, payload: res.data}))
            .catch( err => console.log(err))
       
    };
};

export const addSmurf = (smurf) => {
   
    return (dispatch) => {
        axios.post(`http://localhost:3333/smurfs`, smurf)
            .then(res => {
                dispatch({type: FETCHING_SMURF_DATA, payload: res.data})
            })
            .catch( err => console.log(err))
       
    };
};