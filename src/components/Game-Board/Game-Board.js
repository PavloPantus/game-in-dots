import React, { useEffect, useMemo, useState } from 'react';
import './Game-Board.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const GameBoard = ({
  currentGameMode,
  gameStarted,
  setGameStarted,
  setActiveRandomSquare,
  activeRandomSquare,
  updateUserWonIndexes,
  userWonIndexes,
  updateUserLostIndexes,
  userLostIndexes,
  presets,
  clearUserWonIndexes,
  clearUserLostIndexes,
  setShowResults,
  setWinner,
  currentPlayer,
  sendWinnerInfoToServer,
  loadLeadrs,
}) => {
  const [squareSize] = useState(
    (document.documentElement.clientWidth > 700) ? '30px' : '20px'
  );

  const notUsedIndexes = useMemo(() => {
    const indexes = [];

    for (
      let i = 0;
      i < (currentGameMode ? presets[currentGameMode].field : 5) ** 2;
      i += 1) {
      indexes.push(i);
    }

    return indexes;
  }, [currentGameMode, presets]);

  const getRandom = maxNumber => Math.floor(Math.random() * maxNumber);

  useEffect(() => {
    let gameProcess;

    if (gameStarted) {
      const lengthOfNotUsedIndexes = notUsedIndexes.length;
      const lengthOfUserLostIndexes = userLostIndexes.length;
      const lengthOfUserWonIndexes = userWonIndexes.length;

      // cheking is game over
      console.log(lengthOfUserLostIndexes);

      if (lengthOfUserLostIndexes > Math.floor(lengthOfNotUsedIndexes / 2)
       || lengthOfUserWonIndexes > Math.floor(lengthOfNotUsedIndexes / 2)
      ) {
        setWinner(
          lengthOfUserWonIndexes > lengthOfUserLostIndexes
            ? currentPlayer : 'Computer'
        );

        clearUserWonIndexes();
        clearUserLostIndexes();
        setShowResults(true);
        setGameStarted(false);

        const date = new Date();
        const fullDate = date.toLocaleString();

        sendWinnerInfoToServer({
          winner: userWonIndexes.length > userLostIndexes.length
            ? currentPlayer : 'Computer',
          date: fullDate,
        })
          .then(() => {
            loadLeadrs();
          }).catch(
            (error) => {
              console.log(error);
            }
          );
      } else {
        const filteredItemsBefore = notUsedIndexes.filter(
          item => userWonIndexes.indexOf(item) === -1
            && userLostIndexes.indexOf(item) === -1
        );
        const randomBefore = getRandom(filteredItemsBefore.length);

        setActiveRandomSquare(
          filteredItemsBefore[randomBefore]
        );

        gameProcess = setInterval(() => {
          updateUserLostIndexes(filteredItemsBefore[randomBefore]);
        }, currentGameMode ? presets[currentGameMode].delay : 1000);
      }
    }

    return () => {
      clearInterval(gameProcess);
    };
  }, [
    gameStarted,
    userWonIndexes,
    userLostIndexes,
    notUsedIndexes,
    setActiveRandomSquare,
    currentGameMode,
    presets,
    setWinner,
    currentPlayer,
    clearUserWonIndexes,
    clearUserLostIndexes,
    setShowResults,
    setGameStarted,
    sendWinnerInfoToServer,
    loadLeadrs,
    updateUserLostIndexes]);

  return (
    <section
      style={{
        gridGap: '0',
        gridTemplateColumns: `repeat(${
          currentGameMode ? presets[currentGameMode].field : 5
        }, ${squareSize})`,
      }}
      className="game-board"
    >
      {
        notUsedIndexes.map(
          (square, index) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              style={{
                width: `${squareSize}`,
                height: `${squareSize}`,
              }}
              key={square}
              className={
                classNames(
                  'game-board__square',
                  {
                    'active-random': index === activeRandomSquare,
                    'user-won-square': userWonIndexes.includes(index),
                    'user-lost-square': userLostIndexes.includes(index),
                  },

                )
              }
              onMouseDown={() => {
                if (index === activeRandomSquare) {
                  updateUserWonIndexes(index);
                }
              }}
            />
          )
        )
      }
    </section>
  );
};

GameBoard.propTypes = {
  currentGameMode: PropTypes.string.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  setGameStarted: PropTypes.func.isRequired,
  setActiveRandomSquare: PropTypes.func.isRequired,
  activeRandomSquare: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ]
  ).isRequired,
  updateUserWonIndexes: PropTypes.func.isRequired,
  userWonIndexes: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  updateUserLostIndexes: PropTypes.func.isRequired,
  userLostIndexes: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  presets: PropTypes.shape({
    easyMode: PropTypes.object,
    normalMode: PropTypes.object,
    hardMode: PropTypes.object,
  }).isRequired,
  clearUserWonIndexes: PropTypes.func.isRequired,
  clearUserLostIndexes: PropTypes.func.isRequired,
  setShowResults: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  sendWinnerInfoToServer: PropTypes.func.isRequired,
  loadLeadrs: PropTypes.func.isRequired,
};
