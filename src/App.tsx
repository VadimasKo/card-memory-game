import React, { useState } from 'react';
import './App.css';
import DificultySelector from './components/DificultySelector/DificultySelector';
import Game from './components/Game/Game';
import Rules from './components/Rules';

const difNames:string[] = ['Easy', 'Normal', 'Hard'];

function App() {

  const [dificulty, setDificulty] = useState<number>(1);
  return (
    <div className="flex flex-col text-3xl">
      <div className="bg-yellow-400 h-screen flex flex-col items-center justify-center">
        <h1 className="text-9xl text-white ">Card Memory game</h1>
        <DificultySelector 
          setDificulty={setDificulty}
          dificulty={dificulty}
          text={difNames[dificulty]}
        />
        <Rules dificulty={dificulty}/>
      </div>
      <Game/>
     
    </div>
  );
}

export default App;
