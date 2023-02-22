interface LeaderboardProps {
  table: { name: string; score: number }[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ table }) => {
  return (
    <div>
      {table.map((item, index) => (
        <p key={index}>
          {index + 1} {item.name} {item.score}
        </p>
      ))}
    </div>
  );
};

export default Leaderboard;
