const UPDATE_USER_LOST_INDEXES = 'UPDATE_USER_LOST_INDEXES';
const CLEAR_USER_LOST_INDEXES = 'CLEAR_USER_LOST_INDEXES';

export const getUserLostIndexes = state => state.userLostIndexes;

export const updateUserLostIndexes = payload => ({
  type: UPDATE_USER_LOST_INDEXES,
  payload,
});

export const clearUserLostIndexes = payload => ({
  type: CLEAR_USER_LOST_INDEXES,
  payload,
});

export const UserLostIndexesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USER_LOST_INDEXES: return [...state, action.payload];
    case CLEAR_USER_LOST_INDEXES: return [];
    default: return state;
  }
};
