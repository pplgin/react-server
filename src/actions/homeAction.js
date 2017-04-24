import * as types from '../constants/ActionTypes'
import axios from 'axios';

export const getUName = () => ({
  type: types.GET_HOME,
  data: 'johnnyjiang'
});


export const getAge = () => ({
  type: types.GET_AGE,
  data: 12
});


export const getAPIC = ()=>{
  return dispatch => {
    axios.get('/api/cont')
    .then( res => {
      dispatch({
        type: types.GET_CONT,
        data: res.data
      })
    })
  }
}