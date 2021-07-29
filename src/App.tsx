import React, { useState } from 'react';
import './App.css';
import DificultySelector from './components/DificultySelector/DificultySelector';
import Game from './components/Game/Game';
import Rules from './components/Rules';

const difNames:string[] = ['Easy', 'Normal', 'Hard'];

function App() {

  const [dificulty, setDificulty] = useState<number>(1);
  
  let numCards:number = 6;
  switch(dificulty){
    case 0:
        numCards=6;
        break;
    case 1:
        numCards=12;
        break;
    case 2:
        numCards=18;
        break;
}

  let time = 4-dificulty;


  return (
    <div className="flex flex-col text-3xl">
      <div className="bg-yellow-500 h-screen flex flex-col items-center justify-center">
        <h1 className="text-9xl text-white ">Card Memory game</h1>
        <DificultySelector 
          setDificulty={setDificulty}
          dificulty={dificulty}
          text={difNames[dificulty]}
        />
        <Rules time={time} numCards={numCards}/>
      </div>
      <Game time={time} numCards={numCards}/>
     
    </div>
  );
}

export default App;
