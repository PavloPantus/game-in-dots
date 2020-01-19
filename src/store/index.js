import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { LeadersReducer } from './LeadersReducer';
import { PresetsReducer } from './GamePresetsReducer';
import { CurrentGameModeReducer } from './CurrentGameModeReducer';
import { CurrentPlayerReducer } from './CurrentPlayerReducer';
import { UserWonIndexesReducer } from './userWonIndexesReducer';
import { UserLostIndexesReducer } from './userLostIndexesReducer';
import { StartGameReducer } from './StartGameReducer';
import { ActiveRandomSquareReducer } from './ActiveRandomSquareReducer';
import { ShowResultsReducer } from './ShowResultsReducer';
import { SetWinnerReducer } from './SetWinnerReducer';

const rootReducer = combineReducers({
  leaders: LeadersReducer,
  presets: PresetsReducer,
  currentGameMode: CurrentGameModeReducer,
  currentPlayer: CurrentPlayerReducer,
  userWonIndexes: UserWonIndexesReducer,
  userLostIndexes: UserLostIndexesReducer,
  gameStarted: StartGameReducer,
  activeRandomSquare: ActiveRandomSquareReducer,
  showResults: ShowResultsReducer,
  winner: SetWinnerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
