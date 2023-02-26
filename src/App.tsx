import { useEffect, useState, FormEvent } from "react";

import Picture from "./Components/Picture";
import Word from "./Components/Word";
import Keyboard from "./Components/Keyboard";
import Message from "./Components/Message";
import Controls from "./Components/Controls";
import Leaderboard from "./Components/Leaderboard";

import "./App.css";

const words = require("./words.json");

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "won">("playing");
  const [leaderboard, setLeaderboard] = useState<
    { name: string; score: number }[]
  >([]);

  const getNewWord = () => {
    const index = Math.floor(Math.random() * words.length);
    console.log("new word index is", index);
    setWord(words[index].toUpperCase());
  };

  const getWrongLetters = () => {
    let res: string[] = [];
    guessedLetters.forEach((letter) => {
      if (word.includes(letter)) res.push(letter);
    });
    return res;
  };

  const letterClickHandler = (letter: string) => {
    setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter]);
  };

  useEffect(() => {
    getNewWord();
    setLoading(false);
    const leaderTable = require("./scores.json");
    setLeaderboard(leaderTable);
  }, []);

  useEffect(() => {
    if (
      word &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      console.log("you won!");
      setGameStatus("won");
    }
  }, [guessedLetters, word]);

  const clickPlayHandler = () => {
    setGameStatus("playing");
    setGuessedLetters([]);
    getNewWord();
  };

  const nameSubmitHandler = (
    event: FormEvent<HTMLFormElement>,
    inputElement: HTMLInputElement | null
  ): void => {
    event.preventDefault();
    if (inputElement) {
      console.log(inputElement.value);
      const newElem = {
        name: inputElement.value,
        score: getWrongLetters().length,
      };
      setLeaderboard((currLeaderboard) => [...currLeaderboard, newElem]);
      inputElement.value = "";
    }
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Hangman</h1>
      <Picture wrongGuesses={getWrongLetters().length} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard
        word={word}
        guessedLetters={guessedLetters}
        letterClickHandler={letterClickHandler}
      />
      {gameStatus === "won" && (
        <Message nameSubmitHandler={nameSubmitHandler} />
      )}
      {gameStatus === "won" && <Controls clickPlayHandler={clickPlayHandler} />}
      <Leaderboard table={leaderboard} />
    </div>
  );
};

export default App;
