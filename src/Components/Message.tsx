import { useRef, FormEvent } from "react";

interface MessageProps {
  nameSubmitHandler: (
    event: FormEvent<HTMLFormElement>,
    inputElement: HTMLInputElement | null
  ) => void;
}

const Message: React.FC<MessageProps> = ({ nameSubmitHandler }) => {
  const nameInput = useRef(null);
  return (
    <div>
      <p>You won! Enter your nickname to join the leaderboard:</p>
      <form onSubmit={(event) => nameSubmitHandler(event, nameInput.current)}>
        <input type="text" ref={nameInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Message;
