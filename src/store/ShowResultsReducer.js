const SET_SHOW_RESULTS = 'SET_SHOW_RESULTS';

export const getShowResults = (state) => {
  return state.showResults
}

export const setShowResults = (payload) => ({
  type: SET_SHOW_RESULTS,
  payload,
})

export const ShowResultsReducer = (state = false, action)=>{
  switch (action.type) {
    case SET_SHOW_RESULTS: return action.payload;
    default: return state;
  }
}
