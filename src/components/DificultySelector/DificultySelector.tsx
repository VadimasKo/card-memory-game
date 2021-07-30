import Button from "../common/Button";

const difNames: string[] = ['Easy', 'Normal', 'Hard'];


interface Props {
    dificulty: number;
    setDificulty: (dificulty: number) => void;
}
function DificultySelector({ dificulty, setDificulty }: Props) {
    return (
        <div className="flex text-6xl justify-center">
            <Button text="▼" onClick={() => dificulty === 0 ? setDificulty(0) : setDificulty(dificulty - 1)} />
            <h2 className="underline">{difNames[dificulty]}</h2>
            <Button text='▲' onClick={() => dificulty === 2 ? setDificulty(2) : setDificulty(dificulty + 1)} />
        </div>
    )
}

export default DificultySelector;