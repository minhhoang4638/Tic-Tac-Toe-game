import Cell from "./Cell";

function Board({ cells }) {
  return (
    <div className="board">
      {cells.map((value, index) => (
        <Cell key={index} value={value} />
      ))}
    </div>
  );
}

export default Board;