import {getWinnersFromServer} from "../API";

const UPDATE_LEADERS = 'UPDATE_LEADERS';

export const getLeaders = (state) => {
   return state.leaders
}

const updateLeaders = (payload) => ({
  type: UPDATE_LEADERS,
  payload,
})


export const loadLeadrs  = () => {
  return (dispatch) => {
  getWinnersFromServer()
    .then(
      (winners) => {
        dispatch(
          updateLeaders(winners)
        )
      }
    )
    .catch()
    .finally()
  }
}


export const LeadersReducer = (state = [], action)=>{
  switch (action.type) {
      case UPDATE_LEADERS: return action.payload;
      default: return state;
  }
}
