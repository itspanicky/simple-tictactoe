/*
  Game Logic:
  - Player win condition
  - Who's turn?
*/ 

const _board = require('./board.js')
const _players = require('./player.js')

const start = (_rl, _isAI) => {
  const players = _players.build(_isAI)
  let board = _board.build()

  _board.print(board)
  const takeTurns = (turn) => {
    const { name, marker } = _players.currentPlayer(players, turn);

    if (name !== 'AI') {
      _rl.question(`${name}'s turn, place ${marker} on: (col row)`, (input) => {
        // get new board state given player's input
        const updatedBoard = _board.update(board, marker, input )

        if (!updatedBoard) {
          // retake turn on invalid input
          console.log('Invalid input!')
          takeTurns(turn)
        } else {

          // update board with new board
          board = updatedBoard;
          _board.print(board)

          if (!_board.isGameOver(board, marker)) {

            // next player's turn
            takeTurns(turn = turn === 'x' ? 'o' : 'x')
          } else {

            // win condition is met, game is over
            console.log(`${name} wins!`)
            _rl.close()
          }
        }
      })
    } else {
      // get ai input
      console.log('AI is thinking...')
      
      const input = _players.getAIMove();
      const updatedBoard = _board.update(board, marker, input )

      if (!updatedBoard) {
          // retake turn on invalid input
          takeTurns(turn)
        } else {

          // update board with new board
          board = updatedBoard;
          _board.print(board)

          if (!_board.isGameOver(board, marker)) {

            // next player's turn
            takeTurns(turn = turn === 'x' ? 'o' : 'x')
          } else {

            // win condition is met, game is over
            console.log(`${name} wins!`)
            _rl.close()
          }
        }
      
    }
  }

  takeTurns('x');

}

exports.start = start