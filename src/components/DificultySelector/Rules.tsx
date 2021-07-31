
const spanStyle:string ="text-white  underline";

interface Props{
    numCards: number;
    time: number;
}
function Rules({ numCards,time}:Props){
    
    let numPairs:number = numCards/2;
    return(
        <ul className="flex flex-col items-center mt-12 text-3xl">
            <li>you have <span className={spanStyle}>3 lives</span></li>
            <li>there are <span className={spanStyle}>{numPairs} pairs</span> of cards</li>
            <li>you have <span className={spanStyle}>{time}sec</span>  to memorise pairs of cards</li>
        </ul>
    )
}

export default Rules;