import { useEffect, useState } from "react";
import generateCards from "../../functions/generateCards";
import GameCard from "./components/GameCard";
import LivesBar from "./components/LivesBar";

interface Props{
    numCards:number;
    time:number;
}
function Game({numCards,time}:Props){

    const [lives,setLives] = useState(3);
    const [cards,setCards] = useState(generateCards(numCards));

    useEffect(()=>{
        setCards(generateCards(numCards));
        setLives(3);
    },[numCards])

    return(
        <div className="h-screen w-full">
            <ul>
                {cards.map(card =>(
                    <li key={card.id}>
                        <GameCard 
                            value={card.value}
                            isHidden = {card.isHidden} 
                            isSelected={card.isSelected}
                        />
                    </li>
                ))}
            </ul>
            <LivesBar lives={lives}/>
        </div>
    )
}

export default Game;