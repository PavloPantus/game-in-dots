import React, {useEffect, useRef} from 'react';
import './App.scss';
import LeaderBoard  from './components/LeaderBord'
import {connect} from "react-redux";
import {getPresets, loadPresets} from './store/GamePresetsReducer'
import GameBoard from "./components/Game-Board";
import {getCurrentGameMode, setCurrentGameMode} from './store/CurrentGameModeReducer';
import {getCurrentPlayer, setCurrentPlayer} from './store/CurrentPlayerReducer';
import {setGameStarted} from './store/StartGameReducer';
import {setShowResults,getShowResults} from './store/ShowResultsReducer'
import {getWinner} from './store/SetWinnerReducer';
import {clearUserLostIndexes} from './store/userLostIndexesReducer';
import {clearUserWonIndexes} from './store/userWonIndexesReducer';


function App({
  loadPresets,
  presets,
  currentGameMode,
  setCurrentGameMode,
  currentPlayer,
  setCurrentPlayer,
  setGameStarted,
  setShowResults,
  showResults,
  winner,
  clearUserWonIndexes,
  clearUserLostIndexes,
}) {

  useEffect(()=>{loadPresets()},[loadPresets]);

  const handleGameModeChange = (event)=>{
    setGameStarted(false);
    clearUserWonIndexes();
    clearUserLostIndexes();
    console.log(event.target.value)
    setCurrentGameMode(event.target.value);
  }

 const handleCurrentPlayerInput = (event)=>{
    setCurrentPlayer(event.target.value)
 }

  let selectRef = useRef(null)
  let inputRef = useRef(null)

 const handleStartGame = (event) => {
    setShowResults(false)
    clearUserWonIndexes();
    clearUserLostIndexes();

   if(currentGameMode===''){
     selectRef.current.focus();
     return
   }
   if(currentPlayer===''){
     inputRef.current.focus();
     return
   }
     setGameStarted(true)

 }



  return (
    <div className="App">
        <section className="game-section">
          <div className="game-section__select-game-parameters">
            <select
              ref={selectRef}
              onChange={handleGameModeChange}
              value={currentGameMode}
              className="game-section__select-game-mode" required>
              <option value="">Pick game mode</option>
              {Object.keys(presets).map(
                (key)=>{
                  return <option value={key}>
                    {{
                      easyMode: 'Easy Mode',
                      normalMode: 'Normal Mode',
                      hardMode: 'Hard Mode',
                    }[key]}
                  </option>
                }
              )
              }
            </select>

            <input
              ref={inputRef}
              className="game-section__input-player-name"
              type="text"
              placeholder="Enter your name"
              value={currentPlayer}
              onChange={handleCurrentPlayerInput}
            />


            <button
              className="game-section__play-button"
              onClick={handleStartGame}
            >
              {winner?'PLAY AGAIN':'PLAY'}
            </button>

            {
              showResults &&
              <div
                className={'game-section__results'}
              >
                {winner} won!
              </div>
            }

          </div>



          <GameBoard />

        </section>
        <LeaderBoard />
    </div>
  );
}

const mapStateToProps = (state) => ({
  presets: getPresets(state),
  currentGameMode: getCurrentGameMode(state),
  currentPlayer: getCurrentPlayer(state),
  showResults: getShowResults(state),
  winner: getWinner(state),
})

const mapDispatchToProps = {
  loadPresets,
  setCurrentGameMode,
  setCurrentPlayer,
  setGameStarted,
  setShowResults,
  clearUserWonIndexes,
  clearUserLostIndexes,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
