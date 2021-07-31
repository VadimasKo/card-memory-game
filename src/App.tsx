import { useState } from "react";
import DificultySelector from "./components/DificultySelector/DificultySelector";
import Rules from "./components/DificultySelector/Rules";
import Game from "./components/Game/Game";
import calcNumberCards from "./functions/calcNumCards";

function App() {

  const [dificulty, setDificulty] = useState(1); // 0 -easy, 1-normal, 2 hard

  let numCards:number = calcNumberCards(dificulty);
  let time:number = 5 - dificulty;

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center bg-yellow-500">
        <h1 className="text-9xl text-white">Card Memory Game</h1>
        <DificultySelector dificulty={dificulty} setDificulty={setDificulty}/>
        <Rules numCards={numCards} time={time}/>
      </div>
      <Game numCards={numCards} time={time}/>
    </div>
 
  );
}

export default App;
