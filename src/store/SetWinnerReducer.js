const SET_WINNER = 'SET_WINNER';

export const getWinner = (state) => {
  return state.winner
}

export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
})

export const SetWinnerReducer = (state = '', action)=>{
  switch (action.type) {
    case SET_WINNER: return action.payload;
    default: return state;
  }
}
