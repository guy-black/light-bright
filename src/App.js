import React, {useState} from 'react';
import './app.css';
import Peg from './peg'

function App() {
  const [pegSize, setPegSize] = useState(75);
  const [numRows, setNumRows] = useState(10);
  const [numCols, setNumCols] = useState(10)
  let grid = [];

  function buildGrid() {
    for (let i=0; i<numRows; i++){
      let row = [];
      for (let k=0; k<numCols; k++){
        row.push("peg");
      }
      grid.push(row);
    }
    console.log(grid);
  }

  return (
    <div className="App">
      <form onChange={buildGrid()}>
        <label>peg size<input type="number" value={pegSize} onChange={(e) => {setPegSize(e.target.value)}} min="2"/></label>
        <label>rows<input type="number" value={numRows} onChange={(e) => {setNumRows(e.target.value)}} min="1"/></label>
        <label>columns<input type="number" value={numCols} onChange={(e) => {setNumCols(e.target.value)}} min="1"/></label>
      </form>
      <main style={{
        display : "grid",
        gridTemplateColumns: `repeat(${numCols}, ${pegSize}px)`
        }}>
        {grid.map((col)=> col.map((row)=> <Peg size={pegSize}/>))}
      </main>
    </div>
  );
}

export default App;
