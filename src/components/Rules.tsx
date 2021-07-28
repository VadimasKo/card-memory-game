
const spanStyle:string ="text-white  underline"

interface Props {
    dificulty: number;
}
function Rules({dificulty}:Props) {

    let numPairs:number = 6;
    switch(dificulty){
        case 0:
            numPairs=4;
            break;
        case 1:
            numPairs=6;
            break;
        case 2:
            numPairs=9;
            break;
    }
    return (
        <ul className="flex flex-col items-center mt-12">
            <li>you have <span className={spanStyle}>3 lives</span></li>
            <li>there are <span className={spanStyle}>{numPairs} pairs</span> pairs of cards</li>
            <li>you have <span className={spanStyle}>{4 - dificulty}sec</span>  to memorise pairs of cards</li>
        </ul>
    )
}

export default Rules;