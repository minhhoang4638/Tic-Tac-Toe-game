import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const sampleBoard = ["X", "O", "X", "", "", "", "", "", ""];

  return (
    <main className="game">
      <h1>Tic-Tac-Toe</h1>

      <Scoreboard xWins={0} draws={0} oWins={0} activePlayer="O" />

      <GameStatus message="Player O's turn" />

      <Board cells={sampleBoard} />

      <button className="new-round" type="button">
        ↻ New Round
      </button>
    </main>
  );
}

export default App;