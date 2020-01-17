const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';

export const getCurrentPlayer = state => state.currentPlayer;

export const setCurrentPlayer = payload => ({
  type: UPDATE_CURRENT_PLAYER,
  payload,
});

export const CurrentPlayerReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PLAYER: return action.payload;
    default: return state;
  }
};
