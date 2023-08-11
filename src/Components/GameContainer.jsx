import React, { useEffect, useState } from "react";
import GameDisplay from "./GameDisplay";
import arrayShuffle from "array-shuffle";

const types = ["📚", "🎵", "🕉", "💥", "🔥", "😎", "🌍", "🚀"];
const getGameData = () => {
  //get types and load the types in an new array x2(as an object)
  const gameData = [];

  const typesForGameData = [...types, ...types];

  //shuffle  the object
  let shuffledTypes = arrayShuffle(typesForGameData);

  shuffledTypes.forEach((type, index) => {
    gameData.push({
      type,
      id: index,
      open: false,
      remove: false,
    });
  });

  //return the array with the 16 cards
  return gameData;
};
const GameContainer = () => {
  const [cards, setCards] = useState(getGameData())
  const [inPlay, setInPlay] = useState([])
  const [matching, setMatching] = useState(false) 
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  // inplay - array of 2 cards

  const handleOnClick = (id) => () => {
    if(!matching){
      
 //find the card
    //set the open true or false
    const updatedCards = [...cards];
    const updatedInPlay = [...inPlay]

    updatedCards.forEach((card) => {
      if (card.id === id) {
        card.open = true;
        updatedInPlay.push(card.type)
        setInPlay(updatedInPlay)
        // add to inplay array
      }
    });
    setCards(updatedCards);
    // update inplay state - 1, 2
    }
   
  }

  useEffect(()=>{
    // inplay === length is 2?
    if (inPlay.length === 2 && !matching){
      setMoves(moves + 1)
      setMatching(true)
      const updatedCards = [...cards]
      // type of card 1 === type of card 2
      if (inPlay[0] === inPlay[1]){
        updatedCards.forEach(card => {
          if (card.type === inPlay[0]){
            card.remove = true
          }
        })
        setCards(updatedCards)
        setMatching(false)
        setScore(score + 1)
        setInPlay([])
        //match
      } else{
        // no-match
        setTimeout(()=>{
          updatedCards.forEach(card => {
            if (card.type === inPlay[0] || card.type === inPlay[1]){
              card.open = false
            }
          })
          setCards(updatedCards)
          setMatching(false)
          setInPlay([])
        }, 1000)
      }
    }
        // remove these cards (keep them open)
        // score incrementing
        // close the cards
        // on operation
  })
  return (<GameDisplay 
            cards={cards} 
            onClick={handleOnClick} 
            score ={score}
            moves ={moves}
            />
  );
};

export default GameContainer;