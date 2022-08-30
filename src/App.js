import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

const rows = 40
const cols = 40

const gridOfNums = () => {
  const gridArray = []
  let i;
  let j;
  for(i=0; i<rows; i++) {
    const row = []

    for(j=0; j<cols; j++) {
      row.push(Math.floor(Math.random()*2))
    }

      gridArray.push(row)
  
  }

    return gridArray
}


const [grid, setGrid] = useState(gridOfNums)


//console.log(grid)




  return (
    <div className="App">
      <h1>Game of life</h1>
    </div>
  );
}

export default App;
