const UPDATE_NOT_USED_INDEXES = 'UPDATE_NOT_USED_INDEXES';

export const getNotUsedIndexes = state => state.notUsedIndexes;

export const updateNotUsedIndexes = payload => ({
  type: UPDATE_NOT_USED_INDEXES,
  payload,
});

export const NotUsedIndexesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_NOT_USED_INDEXES: return action.payload;
    default: return state;
  }
};
