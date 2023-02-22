import Key from "./Key";

import "./Keyboard.css";

interface KeyboardProps {
  word: string;
  guessedLetters: string[];
  letterClickHandler: (letter: string) => void;
}

let letters: string[] = [];
for (let i = 0; i < 26; i++) letters.push(String.fromCharCode(65 + i));
console.log(letters);

const Keyboard: React.FC<KeyboardProps> = ({
  word,
  guessedLetters,
  letterClickHandler,
}) => {
  const getLetterStatus = (
    letter: string
  ): "incorrect" | "correct" | "blank" => {
    if (guessedLetters.includes(letter))
      if (word.includes(letter)) return "correct";
      else return "incorrect";
    return "blank";
  };

  return (
    <div className="keyboard_container">
      {letters.map((letter) => (
        <Key
          letterClickHandler={letterClickHandler}
          key={letter}
          letter={letter}
          status={getLetterStatus(letter)}
        />
      ))}
    </div>
  );
};

export default Keyboard;
