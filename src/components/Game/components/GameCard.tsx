import Game from "../Game";


const hiddenStyle:string =" bg-yellow-400";
const selectedStyle:string ="bg-green-400";
const foundStyle:string ="bg-red-400";

interface Props{
    value:number;
    isHidden:boolean;
    isSelected:boolean;
}
function GameCard({value,isHidden,isSelected}:Props){

    let style:string = isHidden ? hiddenStyle : foundStyle;
    if(isSelected) style = selectedStyle; 

    style +=  " text-6xl";

    return(
        <div className={style}>
            {value}
        </div>
    )
}

export default GameCard;