import axios from 'axios';

export const FETCHING_SMURF_DATA = 'FETCHING_SMURF_DATA';
const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR';

export const smursActionFetchData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('smurfAction:smursActionFetchData:res.data',res.data)
                dispatch({type: FETCHING_SMURF_DATA, payload: res.data})
            })
            .catch( err => console.log(err))
       
    }
}