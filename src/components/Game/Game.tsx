import { truncate } from "fs";
import { useEffect, useState } from "react";
import { Card } from "../../classes/card";
import generateCards from "../../functions/generateCards";
import Button from "../common/Button";
import GameCard from "./components/GameCard";
import LivesBar from "./components/LivesBar";

interface Props {
    numCards: number;
    time: number;
}
function Game({ numCards, time }: Props) {

    const [lives, setLives] = useState(3);
    const [cards, setCards] = useState(generateCards(numCards));
    const [selected, setSelected] = useState<number[]>([])

    useEffect(() => {
        restart();
    }, [numCards])

    function restart() {
        setCards(generateCards(numCards));
        setLives(3);
        setSelected([]);
    }
    function startGame() {
        restart();


        const updatedCards: Card[] = cards.map(card => {
            return new Card(card.value, card.id, false, true);
        })
        setCards(updatedCards);

        const timer = setTimeout(() => {
            const visableCards: Card[] = cards.map(card => {
                return new Card(card.value, card.id, true, false);
            })
            setCards(visableCards);
        }, time * 1000);


        return () => clearTimeout(timer);
    }

    function handleClick(id: number, value: number, isHidden: boolean) {  //how to destructurize?
        if (!isHidden || lives === 0) return;

        let newCards: Card[];

        if (selected.length === 0) {
            newCards = cards.map(card => {
                if (card.id === id) return new Card(value, id, false, true) // !isHidden, isSelected
                else return card
            });
            setSelected([id, value]);
        }
        else {
            if (selected[1] === value) {  //if 1stCard === 2ndCard
                newCards = cards.map(card => {
                    if (card.value === value) return new Card(value, card.id, false, false);
                    else return card;
                })
            }
            else {
                newCards = cards.map(card => {
                    if (card.id === id || card.id === selected[0]) return new Card(card.value, card.id, true, false);
                    else return card;
                })
                setLives(lives - 1);
            }
            setSelected([]);
        }
        setCards(newCards);
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center">
            <div className="flex justify-center text-4xl p-10">
                <div className="bg-yellow-400 p-2 rounded-2xl border-2 border-black">
                    <Button
                        text="start"
                        onClick={() => startGame()}
                    />
                </div>
            </div>


            <ul className="grid grid-rows-3 grid-flow-col gap-1 justify-center ">
                {cards.map(card => (
                    <li key={card.id} onClick={() => (handleClick(card.id, card.value, card.isHidden))}>
                        <GameCard
                            value={card.value}
                            isHidden={card.isHidden}
                            isSelected={card.isSelected}
                        />
                    </li>
                ))}
            </ul>
            <LivesBar lives={lives} />
        </div>
    )
}

export default Game;