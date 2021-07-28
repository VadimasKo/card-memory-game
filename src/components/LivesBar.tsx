import { useState } from "react";


interface Props{
    lives:number;
}

function LivesBar({lives}:Props) {

    let livesString:string = "☺ ☺ ☺"
    let deathString:string = "☠ ☠ ☠"
    
    const [healthString, setHealthString] = useState("☺ ☺ ☺");


    //Fix infinite relooop activate only on change!!!!
    // switch(lives){
    //     case 2:
    //         setHealthString("☺ ☺ ☠");
    //         break;
    //     case 1:
    //         setHealthString("☺ ☠ ☠");
    //         break;
    //     case 0:
    //         setHealthString("☠ ☠ ☠");
    //         break; 
    // }


    return (
        <div className="flex justify-center self-end w-full text-6xl">
            <p>{healthString}</p>
        </div>
    )
}

export default LivesBar;