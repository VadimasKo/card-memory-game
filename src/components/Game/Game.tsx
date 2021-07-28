import LivesBar from "../LivesBar";

interface Props{
    numCards:number;
    time:number;

}
function Game(){
    return(
        <div className="h-screen flex ">
            <LivesBar lives={2}/>
        </div>
    )
}

export default Game;