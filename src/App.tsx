import React, { useState } from 'react';
import './App.css';
import DificultySelector from './components/DificultySelector/DificultySelector';
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

      <div className="h-screen flex justify-center">
          <button className="p-4 h-16 text-4xl bg-yellow-400">Start</button>
          <p className="self-end text-7xl">Lives</p>
      </div>
    </div>
  );
}

export default App;
