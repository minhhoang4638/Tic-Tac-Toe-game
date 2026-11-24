function Cell({ value }) {
  const markClass = value ? value.toLowerCase() : "";

  return <button className={`cell ${markClass}`}>{value}</button>;
}

export default Cell;