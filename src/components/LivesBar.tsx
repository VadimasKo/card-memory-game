import { useState } from "react";


interface Props {
    lives: number;
}

function LivesBar({ lives }: Props) {

    // let livesString: string = "☺ ☺ ☺"
    // let deathString: string = "☠ ☠ ☠"

    const [healthString, setHealthString] = useState("☺ ☺ ☺");
    
    if (lives === 3 && healthString !== "☺ ☺ ☺") setHealthString("☺ ☺ ☺");
    else if (lives === 2 && healthString !== "☺ ☺ ☠") setHealthString("☺ ☺ ☠");
    else if (lives === 1 && healthString !== "☺ ☠ ☠") setHealthString("☺ ☠ ☠");
    else if (lives === 0 && healthString !== "☠ ☠ ☠") setHealthString("☠ ☠ ☠");

    return (
        <div className="flex justify-center justify-self-end w-full text-6xl">
            <p>{healthString}</p>
        </div>
    )
}

export default LivesBar;