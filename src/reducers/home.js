import * as types from '../constants/ActionTypes'

let initState ={
  name:'111212'
};
export default function Home(state = initState, action){

  switch (action.type){
    case types.GET_HOME:
      return {
        ...state,
        name: action.data
      }
    case types.GET_AGE:
      return {
        ...state,
        age: action.data
      }
    case types.GET_CONT:
      return {
        ...state,
        content: action.data
      }
    default:
     return state
  }
}