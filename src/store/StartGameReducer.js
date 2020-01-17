const SET_GAME_STARTED = 'SET_GAME_STARTED';

export const getGameStarted = state => state.gameStarted;

export const setGameStarted = payload => ({
  type: SET_GAME_STARTED,
  payload,
});

export const StartGameReducer = (state = false, action) => {
  switch (action.type) {
    case SET_GAME_STARTED: return action.payload;
    default: return state;
  }
};
