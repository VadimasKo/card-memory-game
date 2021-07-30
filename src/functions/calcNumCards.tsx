function calcNumberCards(dificulty:number):number{
    
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

    return numCards;
}

export default calcNumberCards;