interface BoardProps {
  (
    board: [
      [number, number, number, number],
      [number, number, number, number],
      [number, number, number, number],
      [number, number, number, number]
    ],
    number: number
  ): boolean;
}

const getEmptyBoard = (): [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number]
] => {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

const hasValue: BoardProps = (board, number) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === number) {
        return true;
      }
    }
  }
  return false;
};

export const victory = (board:  [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number]
]) => {
  return hasValue(board, 2048);
};

export const getRandomBoard = () => {
  const newBoard = getEmptyBoard();
  let randomRow = Math.floor(Math.random() * 3);
  let randomColumn = Math.floor(Math.random() * 3);
  newBoard[randomRow][randomColumn] = 2;
  return newBoard;
};

const createRandomRowColumn = () => {
  let res = [];
  let randomRow = Math.floor(Math.random() * 3);
  let randomColumn = Math.floor(Math.random() * 3);
  res.push(randomRow, randomColumn);
  return res;
};
const isFull = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  return !hasValue(board, 0);
};
export const moveAddNumber = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  if (isFull(board)) {
    return board;
  }
  let [row, column] = createRandomRowColumn();
  while (board[row][column] !== 0) {
    [row, column] = createRandomRowColumn();
  }
  board[row][column] = 2;
  return board;
};

const merge = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
        board[i][j + 1] = board[i][j + 1] * 2;
        board[i][j] = 0;
      }
    }
  }
  return board;
};

const move = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = getEmptyBoard();
  for (let i = 0; i < board.length; i++) {
    let colIndex = 0;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        newBoard[i][colIndex] = board[i][j];
        colIndex++;
      }
    }
  }
  return newBoard;
};
const reverse = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
): any => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].reverse());
  }
  return newBoard;
};
const rotateRight = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = getEmptyBoard();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newBoard[i][j] = board[board[i].length - 1 - j][i];
    }
  }
  return newBoard;
};
const rotateLeft = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = getEmptyBoard();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newBoard[i][j] = board[j][board[i].length - 1 - i];
    }
  }
  return newBoard;
};
//move
export const moveLeft = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = move(board);
  const newBoard1 = merge(newBoard);
  return move(newBoard1);
};
export const moveRight = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = rotateRight(board);
  const newBoard1 = moveLeft(newBoard);
  return rotateLeft(newBoard1);
};

export const moveDown = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = reverse(board);
  const newBoard1 = moveLeft(newBoard);
  return reverse(newBoard1);
};
export const moveUp = (
  board: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ]
) => {
  const newBoard = rotateLeft(board);
  const newBoard1 = moveLeft(newBoard);
  return rotateRight(newBoard1);
};


