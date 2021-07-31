import { useState } from "react";

interface Props {
    lives: number;
}

function LivesBar({ lives }: Props) {       /// why does LivesBar(lives:number) not work!?
    const [healthString, setHealthString] = useState("☺ ☺ ☺");

    if (lives === 3 && healthString !== "☺ ☺ ☺") setHealthString("☺ ☺ ☺");
    else if (lives === 2 && healthString !== "☺ ☺ ☠") setHealthString("☺ ☺ ☠");
    else if (lives === 1 && healthString !== "☺ ☠ ☠") setHealthString("☺ ☠ ☠");
    else if (lives === 0 && healthString !== "☠ ☠ ☠") setHealthString("☠ ☠ ☠");

    return (
        <div className=" flex justify-center w-full text-7xl">
            <p>{healthString}</p>
        </div>
    )
}

export default LivesBar;