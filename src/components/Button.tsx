

interface Props {
    text: string;
    onClick: any;
}

function Button({ text, onClick }: Props) {
    return (
        <button className="hover:text-white" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;