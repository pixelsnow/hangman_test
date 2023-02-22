interface ControlsProps {
  clickPlayHandler: () => void;
}

const Controls: React.FC<ControlsProps> = ({ clickPlayHandler }) => {
  return (
    <div>
      <button onClick={clickPlayHandler}>Play again</button>
    </div>
  );
};

export default Controls;
