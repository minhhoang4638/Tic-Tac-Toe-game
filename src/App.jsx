import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import "./App.css";

function App() {
  const sampleBoard = ["X", "O", "", "", "X", "", "O", "", ""];

  return (
    <main className="game">
      <h1>Tic-Tac-Toe</h1>
      <GameStatus message="Lượt của X" />
      <Board cells={sampleBoard} />
    </main>
  );
}

export default App;