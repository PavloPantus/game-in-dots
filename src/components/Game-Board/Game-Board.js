import React, { useEffect, useMemo } from 'react';
import './Game-Board.scss';
import classNames from 'classnames';


export const GameBoard = ({
  currentGameMode,
  gameStarted,
  setGameStarted,
  notUsedIndexes,
  updateNotUsedIndexes,
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
  let arrayOfSquares = useMemo(
()=>{
          console.log('counting');
          let squares = [];
          for(let i = 0; i < Math.pow(currentGameMode?presets[currentGameMode].field:5,2); i++){
            squares.push(i)
          };
          return squares;
  },
    [currentGameMode, presets]
  );

  useEffect(()=>{
    let indexes = [];
    for(let i = 0; i < Math.pow(currentGameMode?presets[currentGameMode].field :5 ,2); i++){
      indexes.push(i)
    };
    updateNotUsedIndexes(indexes)},[currentGameMode, presets, updateNotUsedIndexes])



  const getRandom = (maxNumber)=>{
    return Math.floor(Math.random() * maxNumber)
  }


  useEffect(()=>{
    let gameProcess;
    console.log('length of not used',notUsedIndexes.length)
    if(gameStarted){
      //cheking is game over
      if(userLostIndexes.length>notUsedIndexes.length/2
       || userWonIndexes.length>notUsedIndexes.length/2
      ){
        setWinner(userWonIndexes.length>userLostIndexes.length?currentPlayer:'Computer')
        clearUserWonIndexes();
          clearUserLostIndexes();
        setShowResults(true);
        setGameStarted(false);
        let date = new Date();
        let fullDate = date.toLocaleString()
        sendWinnerInfoToServer({
          winner: userWonIndexes.length>userLostIndexes.length
            ?currentPlayer:'Computer',
          date: fullDate,
        })
          .then(()=>{loadLeadrs()})
        ;
      }


      let filteredItemsBefore = notUsedIndexes.filter(
        (item)=>userWonIndexes.indexOf(item)===-1
        && userLostIndexes.indexOf(item)===-1
      );
      let randomBefore = getRandom(filteredItemsBefore.length);
      setActiveRandomSquare(
        filteredItemsBefore[randomBefore]
      );
     gameProcess = setInterval(()=>{
       updateUserLostIndexes(filteredItemsBefore[randomBefore])
       console.log('userLOOOOST',userLostIndexes)
        console.log(
          'filtering',
        );
        let filteredItems = notUsedIndexes.filter(
          (item)=>userWonIndexes.indexOf(item)===-1
            && userLostIndexes.indexOf(item)===-1
        );
        console.log('fileterd items length =',filteredItems.length)
        let random = getRandom(filteredItems.length);
        console.log('random index',random)
        setActiveRandomSquare(
          filteredItems[random]
        );
        console.log('game is going', userWonIndexes)},currentGameMode ? presets[currentGameMode].delay:2000)
    }
    return ()=>{clearInterval(gameProcess)}
  } ,[gameStarted, userWonIndexes, userLostIndexes, notUsedIndexes, setActiveRandomSquare, currentGameMode, presets, setWinner, currentPlayer, clearUserWonIndexes, clearUserLostIndexes, setShowResults, setGameStarted, sendWinnerInfoToServer, loadLeadrs, updateUserLostIndexes])



    return (
      <section
        style={{
          gridGap: '0',
          gridTemplateColumns: `repeat(${currentGameMode ? presets[currentGameMode].field : 5}, 30px)`,
        }}
        className="game-board">
        {arrayOfSquares.map(
          (sqare,index)=>{
            return (
              <div
                key={sqare}
                className={
                  classNames(
                    'game-board__square',
                    {
                      'active-random': index===activeRandomSquare,
                      'user-won-square': userWonIndexes.includes(index),
                      'user-lost-square': userLostIndexes.includes(index),
                    },

                  )
                 }
                onClick={()=>{console.log('user click', userWonIndexes);if(index===activeRandomSquare){updateUserWonIndexes(index)}}}
              >
              </div>
              )
          }
        )}
      </section>
    )
}


