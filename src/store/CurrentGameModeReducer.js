const UPDATE_CURRENT_GAME_MODE = 'UPDATE_CURRENT_GAME_MODE';

export const getCurrentGameMode = state => state.currentGameMode;

export const setCurrentGameMode = payload => ({
  type: UPDATE_CURRENT_GAME_MODE,
  payload,
});

export const CurrentGameModeReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_CURRENT_GAME_MODE: return action.payload;
    default: return state;
  }
};
