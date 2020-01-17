import { connect } from 'react-redux';
import { GameBoard } from './Game-Board';
import {
  getGameStarted,
  setGameStarted,
} from '../../store/StartGameReducer';
import {
  getNotUsedIndexes,
  updateNotUsedIndexes,
} from '../../store/NotUsedIndexesReducer';
import {
  setActiveRandomSquare,
  getActiveRandomSuqare,
} from '../../store/ActiveRandomSquareReducer';
import {
  getUserWonIndexes,
  updateUserWonIndexes,
  clearUserWonIndexes,
} from '../../store/userWonIndexesReducer';
import {
  getUserLostIndexes,
  updateUserLostIndexes,
  clearUserLostIndexes,
} from '../../store/userLostIndexesReducer';
import { getCurrentGameMode } from '../../store/CurrentGameModeReducer';
import { getPresets } from '../../store/GamePresetsReducer';
import { setShowResults } from '../../store/ShowResultsReducer';
import { setWinner } from '../../store/SetWinnerReducer';
import { getCurrentPlayer } from '../../store/CurrentPlayerReducer';
import { sendWinnerInfoToServer } from '../../API';
import { loadLeadrs } from '../../store/LeadersReducer';

const mapStateToProps = state => ({
  gameStarted: getGameStarted(state),
  notUsedIndexes: getNotUsedIndexes(state),
  activeRandomSquare: getActiveRandomSuqare(state),
  userWonIndexes: getUserWonIndexes(state),
  userLostIndexes: getUserLostIndexes(state),
  currentGameMode: getCurrentGameMode(state),
  presets: getPresets(state),
  currentPlayer: getCurrentPlayer(state),
});

const mapDispatchToProps = {
  setGameStarted,
  updateNotUsedIndexes,
  setActiveRandomSquare,
  updateUserWonIndexes,
  updateUserLostIndexes,
  clearUserWonIndexes,
  clearUserLostIndexes,
  setShowResults,
  setWinner,
  sendWinnerInfoToServer,
  loadLeadrs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
