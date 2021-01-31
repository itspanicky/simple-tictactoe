/*
  Board Logic:
  - Create board
  - Display board
*/

// converts column input into column idx
const getColIdx = (_input) => {
  const idx = ['a', 'b', 'c'].indexOf(_input)
  return idx !== -1 ? idx : null
}

// converts row input into row idx
const getRowIdx = (_input) => _input > 0 && _input < 4 ? _input - 1 : null

// set up new tic-tac-toe board
const build = () => [
  [' ', ' ', ' '], 
  [' ', ' ', ' '], 
  [' ', ' ', ' ']
];

// display board
const print = (_board) => {
  console.log('');
  console.log ('  a   b   c  ');

  for (let row = 0; row < _board.length; row++) {
      let line = `${row + 1}`
    for (let col = 0; col < _board[row].length; col++) {
      const value = _board[row][col];

      line += ` ${value} `

      if (col !== _board[row].length - 1) {
        line += '|'
      }
    }

    console.log(line);

    if (row != _board.length - 1) {
      console.log(' ---+---+---');
      
    }
  }

  console.log('');
}

// update board with player's input
const update = (_prevBoardState, _marker, _playerInput) => {
  const inputs = _playerInput.split(' ')
  const colIdx = getColIdx(inputs[0])
  const rowIdx = getRowIdx(inputs[1])
  
  let updatedBoard = _prevBoardState
  if (colIdx === null || 
      rowIdx === null || 
      updatedBoard[rowIdx][colIdx] !== ' ') {
    // return null on invalid input
    return null
  } else {
    updatedBoard[rowIdx][colIdx] = _marker;

    return updatedBoard
  }

}

// check if win condition is met for current player
const isGameOver = (_board, _marker) => {
  let winningStr = `${_marker}${_marker}${_marker}`;
  let diagStrA = ''
  let diagStrB = ''

  for (let row = 0; row < _board.length; row++) {
    let rowStr = ''
    let colStr = ''

    for (let col = 0; col < _board[row].length; col++) {
      rowStr += _board[row][col]
      colStr += _board[col][row]
    }

    if (row === 0) {
      diagStrA += _board[row][0]
      diagStrB += _board[row][2]
    } else if (row === 1) {
      diagStrA += _board[row][1]
      diagStrB += _board[row][1]
    } else if (row === 2) {
      diagStrA += _board[row][2]
      diagStrB += _board[row][0]
    }

    if (winningStr === rowStr || 
        winningStr === colStr ||
        winningStr === diagStrA ||
        winningStr === diagStrB
        ) {
      return true
    }
  }
  return false;
}

exports.build = build;
exports.print = print;
exports.update = update;
exports.isGameOver = isGameOver;
