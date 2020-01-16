const UPDATE_USER_WON_INDEXES = 'UPDATE_USER_WON_INDEXES';
const CLEAR_USER_WON_INDEXES = 'CLEAR_USER_WON_INDEXES';


export const getUserWonIndexes = (state) => {
  return state.userWonIndexes
}

export const updateUserWonIndexes = (payload) => ({
  type: UPDATE_USER_WON_INDEXES,
  payload,
})

export const clearUserWonIndexes = (payload) => ({
  type: CLEAR_USER_WON_INDEXES,
  payload,
})


export const UserWonIndexesReducer = (state = [], action)=>{
  switch (action.type) {
    case UPDATE_USER_WON_INDEXES: return [...state, action.payload];
    case CLEAR_USER_WON_INDEXES: return [];
    default: return state;
  }
}
