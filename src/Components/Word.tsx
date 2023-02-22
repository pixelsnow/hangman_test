import WordLetter from "./WordLetter";

import "./Word.css";

interface WordProps {
  word: string;
  guessedLetters: string[];
}

const Word: React.FC<WordProps> = ({ word, guessedLetters }) => {
  return (
    <div className="word_container">
      {word.split("").map((letter, index) => (
        <WordLetter
          key={index}
          letter={letter}
          guessed={guessedLetters.includes(letter)}
        />
      ))}
    </div>
  );
};

export default Word;
