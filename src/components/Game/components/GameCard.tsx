
const hiddenStyle:string ="bg-yellow-500 transform hover:bg-yellow-400  ";
const selectedStyle:string ="border-black text-yellow-500";
const foundStyle:string ="text-yellow-400 opacity-40";

interface Props{
    value:number;
    isHidden:boolean;
    isSelected:boolean;
}
function GameCard({value,isHidden,isSelected}:Props){

    let style:string = isHidden ? hiddenStyle : foundStyle;
    if(isSelected) style = selectedStyle; 

    style +=  " w-56 h-56 text-9xl font-bold border-2 flex justify-center items-center";

    return(
        <div className={style}>
            <p className={isHidden && !isSelected? "hidden" : ""}>{value}</p>
        </div>
    )
}

export default GameCard;