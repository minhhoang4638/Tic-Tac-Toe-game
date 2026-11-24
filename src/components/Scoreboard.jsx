function Scoreboard({ xWins, draws, oWins, activePlayer }) {
  const scores = [
    { label: "Player X", value: xWins, mark: "x" },
    { label: "Draws", value: draws, mark: "draw" },
    { label: "Player O", value: oWins, mark: "o" },
  ];

  return (
    <section className="scoreboard">
      {scores.map((score) => (
        <div
          key={score.mark}
          className={`score-card ${score.mark} ${
            activePlayer.toLowerCase() === score.mark ? "active" : ""
          }`}
        >
          <span>{score.label}</span>
          <strong>{score.value}</strong>
        </div>
      ))}
    </section>
  );
}

export default Scoreboard;