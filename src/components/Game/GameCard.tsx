const styleHidden: string =
  "rounded-full h-36 w-36 p-6 text-center bg-yellow-500 text-yellow-500 border-2 border-yellow-500 hover:border-black";
const styleOpen: string =
  "border-2 border-yellow-600 p-6 rounded-full h-36 w-36 text-center ";

interface Props {
  value: number;
  isVisible: boolean;
}
function GameCard({ value, isVisible }: Props) {
  return (
    <div className={!isVisible ? styleHidden : styleOpen} >
      <div className={!isVisible ? "hidden" : ""}>
        <p className="text-8xl">{value}</p>
      </div>
    </div>
  );
}

export default GameCard;
