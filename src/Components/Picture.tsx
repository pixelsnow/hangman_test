interface PictureProps {
  wrongGuesses: number;
}

const Picture: React.FC<PictureProps> = ({ wrongGuesses }) => {
  return <div>Wrong guesses: {wrongGuesses}</div>;
};

export default Picture;
