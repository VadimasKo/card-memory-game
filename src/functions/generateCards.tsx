import { Card } from "../classes/card";

function generateCards(numCards:number):Card[]{
    let intCards:number[]= [];
    for (let i = 0; i < numCards / 2; i++)  intCards.push(i + 1, i + 1);
    intCards = intCards.sort(() => Math.random() - 0.5)
    return intCards.map((value,index)=> new Card(value,index))

}

export default generateCards;