import React from 'react';
import {
  moveAddNumber,
  getRandomBoard,
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  victory,
} from './model/model';
import './styles/style.css';
function App() {
  const [board, setBoard] = React.useState(getRandomBoard());
  const left = () => {
    if (victory(board)) {
      alert('victory');
    } else {
      setBoard(moveAddNumber(moveLeft(board)));
    }
  };
  const right = () => {
    if (victory(board)) {
      alert('victory');
    } else {
      setBoard(moveAddNumber(moveRight(board)));
    }
  };
  const up = () => {
    if (victory(board)) {
      alert('victory');
    } else {
      setBoard(moveAddNumber(moveUp(board)));
    }
  };
  const down = () => {
    if (victory(board)) {
      alert('victory');
    } else {
      setBoard(moveAddNumber(moveDown(board)));
    }
  };
  return (
    <>
      <button onClick={() => right()}>right</button>
      <button onClick={() => left()}>up</button>
      <button onClick={() => up()}>left</button>
      <button onClick={() => down()}>down</button>
      <div className="Board">
        {board.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map((col, indexColumn) => (
                <div className="column" key={indexColumn}>
                  {col}
                </div>
              ))}
            </div>
          );
        })}
      </div>{' '}
    </>
  );
}
export default App;
