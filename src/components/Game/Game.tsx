
import { useState } from "react";
import LivesBar from "../LivesBar";
import GameCard from "./GameCard";



class Supercard{
    value:number;
    isVisible:boolean;

    constructor(value:number){
        this.value = value;
        this.isVisible = false;
    }
}
interface Props {
  numCards: number;
  time: number;
}
function Game({ time, numCards }: Props) {
  const [lives, setLives] = useState<number>(3);

  let cards: number[] = [];
  for (let i = 0; i < numCards / 2; i++) {
    cards.push(i + 1, i + 1);
  }
  cards = cards.sort(() => Math.random() - 0.5);


  const superCards: Supercard[] = cards.map(value=>
    (
         new Supercard(value)
    ))

    const [stateSuperCards, setStateSuperCards] = useState<Supercard[]>(cards.map(value=>
        (
             new Supercard(value)
        ))
    );

    function changeVisibility(id:number){
        console.log(id);
    }



  return (
    <div className="h-screen flex w-full flex-col">
      <ul className="grid grid-cols-3 justify-items-center content-around w-full justify-center h-full">
        {superCards.map((card, index) => (
          <li key={index} onClick={()=>console.log(card.value)}>
            <GameCard value={card.value} isVisible={card.isVisible}/>{" "}
            {console.log(card.isVisible)}
          </li>
        ))}
      </ul>
      <LivesBar lives={lives} />
    </div>
  );
}

export default Game;
