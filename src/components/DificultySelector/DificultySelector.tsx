import Button from "../Button";

interface Props {
    setDificulty: any;
    dificulty: any;
    text: string;
}
function DificultySelector({ setDificulty, dificulty, text }: Props) {

    return (
        <div className="flex w-3/5 text-6xl justify-center">
            <Button
                text='▼'
                onClick={() => (dificulty == 0 ? setDificulty(0) : setDificulty(dificulty - 1))}
                />
            <h3 className="underline">{text}</h3>
            <Button
                text='▲'
                onClick={() => (dificulty == 2 ? setDificulty(2) : setDificulty(dificulty + 1))}
            />
        </div>
    )
}

export default DificultySelector;