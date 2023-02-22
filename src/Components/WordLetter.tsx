interface WordLetterProps {
  letter: string;
  guessed: boolean;
}

const WordLetter: React.FC<WordLetterProps> = ({ letter, guessed }) => {
  return <div>{guessed ? letter : "_"}</div>;
};

export default WordLetter;
