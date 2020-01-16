const SET_RANDOM_SQUARE = 'SET_RANDOM_SQUARE';

export const getActiveRandomSuqare = (state) => {
  return state.activeRandomSquare
}

export const setActiveRandomSquare = (payload) => ({
  type: SET_RANDOM_SQUARE,
  payload,
})

export const ActiveRandomSquareReducer = (state = '', action)=>{
  switch (action.type) {
    case SET_RANDOM_SQUARE: return action.payload;
    default: return state;
  }
}
