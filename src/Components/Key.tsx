import "./Key.css";

interface KeyProps {
  letter: string;
  status: "incorrect" | "correct" | "blank";
  letterClickHandler: (letter: string) => void;
}

const Key: React.FC<KeyProps> = ({ letter, status, letterClickHandler }) => {
  return (
    <div className="key_container">
      <button
        className={status}
        onClick={() => letterClickHandler(letter)}
        disabled={status !== "blank"}
      >
        {letter}
      </button>
    </div>
  );
};

export default Key;
